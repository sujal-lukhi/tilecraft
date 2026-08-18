import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateSavedDesignDto } from './dto/create-saved-design.dto';

@Injectable()
export class SavedDesignsService {
  constructor(private prisma: PrismaService) {}

  async findUserSavedDesigns(userId: string) {
    return this.prisma.savedDesign.findMany({
      where: { userId },
      include: {
        project: {
          select: { id: true, title: true, slug: true, category: true, coverImage: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async saveDesign(userId: string, dto: CreateSavedDesignDto) {
    return this.prisma.savedDesign.create({
      data: {
        userId,
        ...dto,
      },
    });
  }

  async removeSavedDesign(userId: string, id: string) {
    const item = await this.prisma.savedDesign.findFirst({
      where: { id, userId },
    });

    if (!item) {
      throw new NotFoundException(`Saved design not found`);
    }

    await this.prisma.savedDesign.delete({ where: { id } });
    return { message: 'Saved design removed successfully' };
  }
}
