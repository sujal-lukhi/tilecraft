import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateBeforeAfterDto } from './dto/create-before-after.dto';
import { StorageService, UploadedMulterFile } from '../../integrations/storage/storage.service';

@Injectable()
export class ProjectsService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
  ) {}

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  async findAllProjects(category?: string, featuredOnly = false) {
    return this.prisma.project.findMany({
      where: {
        ...(category ? { category } : {}),
        ...(featuredOnly ? { isFeatured: true } : {}),
      },
      include: {
        media: { orderBy: { orderIndex: 'asc' } },
        beforeAfters: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findProjectBySlug(slug: string) {
    const project = await this.prisma.project.findUnique({
      where: { slug },
      include: {
        media: { orderBy: { orderIndex: 'asc' } },
        beforeAfters: true,
      },
    });

    if (!project) {
      throw new NotFoundException(`Project '${slug}' not found`);
    }

    return project;
  }

  async createProject(dto: CreateProjectDto) {
    const slug = `${this.slugify(dto.title)}-${Date.now().toString().slice(-4)}`;
    return this.prisma.project.create({
      data: {
        ...dto,
        slug,
      },
    });
  }

  async updateProject(id: string, dto: UpdateProjectDto) {
    const project = await this.prisma.project.findUnique({ where: { id } });
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    return this.prisma.project.update({
      where: { id },
      data: dto,
    });
  }

  async deleteProject(id: string) {
    const project = await this.prisma.project.findUnique({ where: { id } });
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    await this.prisma.project.delete({ where: { id } });
    return { message: 'Project deleted successfully' };
  }

  async addProjectMedia(projectId: string, mediaUrl: string, mediaType = 'IMAGE', caption?: string) {
    return this.prisma.projectMedia.create({
      data: {
        projectId,
        mediaUrl,
        mediaType,
        caption,
      },
    });
  }

  // Before & After Management
  async findAllBeforeAfter(category?: string) {
    return this.prisma.beforeAfter.findMany({
      where: category ? { category } : {},
      orderBy: { createdAt: 'desc' },
    });
  }

  async createBeforeAfter(dto: CreateBeforeAfterDto) {
    return this.prisma.beforeAfter.create({
      data: dto,
    });
  }

  async deleteBeforeAfter(id: string) {
    await this.prisma.beforeAfter.delete({ where: { id } });
    return { message: 'Before/After showcase deleted' };
  }

  // File Upload Helper
  uploadMedia(file: UploadedMulterFile, subfolder: string) {
    return this.storageService.saveFile(file, subfolder);
  }
}
