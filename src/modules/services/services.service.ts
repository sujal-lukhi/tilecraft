import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  async findAll(category?: string) {
    return this.prisma.service.findMany({
      where: {
        isActive: true,
        ...(category ? { category } : {}),
      },
      orderBy: { orderIndex: 'asc' },
    });
  }

  async findOneBySlug(slug: string) {
    const service = await this.prisma.service.findUnique({
      where: { slug },
    });

    if (!service) {
      throw new NotFoundException(`Service '${slug}' not found`);
    }

    return service;
  }

  async create(dto: CreateServiceDto) {
    const slug = this.slugify(dto.title);
    const existing = await this.prisma.service.findUnique({ where: { slug } });
    if (existing) {
      throw new ConflictException(`Service with title '${dto.title}' already exists`);
    }

    return this.prisma.service.create({
      data: {
        ...dto,
        slug,
      },
    });
  }

  async update(id: string, dto: UpdateServiceDto) {
    const service = await this.prisma.service.findUnique({ where: { id } });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }

    const data: any = { ...dto };
    if (dto.title) {
      data.slug = this.slugify(dto.title);
    }

    return this.prisma.service.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    const service = await this.prisma.service.findUnique({ where: { id } });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }

    await this.prisma.service.delete({ where: { id } });
    return { message: 'Service deleted successfully' };
  }
}
