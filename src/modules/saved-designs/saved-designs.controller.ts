import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { SavedDesignsService } from './saved-designs.service';
import { CreateSavedDesignDto } from './dto/create-saved-design.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Saved Designs')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('saved-designs')
export class SavedDesignsController {
  constructor(private readonly savedDesignsService: SavedDesignsService) {}

  @Get()
  @ApiOperation({ summary: 'Customer Dashboard: Get my saved design bookmarks' })
  async getMySavedDesigns(@CurrentUser('id') userId: string) {
    return this.savedDesignsService.findUserSavedDesigns(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Customer Dashboard: Save a design idea to profile' })
  async saveDesign(@CurrentUser('id') userId: string, @Body() dto: CreateSavedDesignDto) {
    return this.savedDesignsService.saveDesign(userId, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Customer Dashboard: Remove saved design' })
  async removeSavedDesign(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.savedDesignsService.removeSavedDesign(userId, id);
  }
}
