import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiQuery, ApiConsumes, ApiBearerAuth } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateBeforeAfterDto } from './dto/create-before-after.dto';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '../../common/enums/role.enum';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';

@ApiTags('Projects & Gallery')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Public: View Gallery / Projects portfolio' })
  @ApiQuery({ name: 'category', required: false, example: 'Bathroom' })
  @ApiQuery({ name: 'featured', required: false, type: Boolean })
  async findAllProjects(
    @Query('category') category?: string,
    @Query('featured') featured?: string,
  ) {
    return this.projectsService.findAllProjects(category, featured === 'true');
  }

  @Public()
  @Get('before-after')
  @ApiOperation({ summary: 'Public: View Before/After Transformations' })
  @ApiQuery({ name: 'category', required: false, example: 'Kitchen' })
  async findAllBeforeAfter(@Query('category') category?: string) {
    return this.projectsService.findAllBeforeAfter(category);
  }

  @Public()
  @Get(':slug')
  @ApiOperation({ summary: 'Public: View project details' })
  async findProjectBySlug(@Param('slug') slug: string) {
    return this.projectsService.findProjectBySlug(slug);
  }

  // Admin Operations
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  @ApiOperation({ summary: 'Admin: Create new project showcase' })
  async createProject(@Body() dto: CreateProjectDto) {
    return this.projectsService.createProject(dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Admin: Update project details' })
  async updateProject(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
    return this.projectsService.updateProject(id, dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')
  @ApiOperation({ summary: 'Admin: Delete project' })
  async deleteProject(@Param('id') id: string) {
    return this.projectsService.deleteProject(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post('before-after')
  @ApiOperation({ summary: 'Admin: Create Before/After entry' })
  async createBeforeAfter(@Body() dto: CreateBeforeAfterDto) {
    return this.projectsService.createBeforeAfter(dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete('before-after/:id')
  @ApiOperation({ summary: 'Admin: Delete Before/After entry' })
  async deleteBeforeAfter(@Param('id') id: string) {
    return this.projectsService.deleteBeforeAfter(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post('upload')
  @ApiOperation({ summary: 'Admin: Upload project photo/video' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Please provide a file to upload');
    }
    const fileUrl = this.projectsService.uploadMedia(file, 'projects');
    return { url: fileUrl };
  }
}
