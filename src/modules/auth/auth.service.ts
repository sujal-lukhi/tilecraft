import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  ForbiddenException,
  OnModuleInit,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Role } from '../../common/enums/role.enum';

@Injectable()
export class AuthService implements OnModuleInit {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async onModuleInit() {
    await this.ensureAdminExists();
  }

  async ensureAdminExists() {
    try {
      const adminEmails = [
        'admin@tilecraftinteriors.com',
        'tilecraftinteriors1@gmail.com'
      ];

      for (const email of adminEmails) {
        const exists = await this.prisma.user.findUnique({ where: { email } });
        if (!exists) {
          const hashedPassword = await bcrypt.hash('AdminPass123!', 10);
          await this.prisma.user.create({
            data: {
              email,
              password: hashedPassword,
              fullName: 'Tilecraft Administrator',
              phone: '+91 9313684573',
              role: Role.ADMIN,
            },
          });
          this.logger.log(`🛡️ Admin user initialized: ${email}`);
        }
      }
    } catch (err: any) {
      this.logger.warn(`Admin auto-seed notice: ${err.message}`);
    }
  }

  async registerCustomer(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email address already registered');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        fullName: dto.fullName,
        phone: dto.phone,
        role: Role.CUSTOMER,
      },
    });

    const token = this.generateJwt(user.id, user.email, user.role);

    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        phone: user.phone,
      },
      accessToken: token,
    };
  }

  async loginCustomer(dto: LoginDto) {
    const user = await this.validateUser(dto.email, dto.password);
    const token = this.generateJwt(user.id, user.email, user.role);

    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        phone: user.phone,
      },
      accessToken: token,
    };
  }

  async loginAdmin(dto: LoginDto) {
    const user = await this.validateUser(dto.email, dto.password);

    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Access denied: User is not an Administrator');
    }

    const token = this.generateJwt(user.id, user.email, user.role);

    return {
      admin: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
      accessToken: token,
    };
  }

  private async validateUser(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }

  private generateJwt(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };
    return this.jwtService.sign(payload);
  }
}
