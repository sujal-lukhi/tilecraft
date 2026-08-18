import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ContactInfoService } from './contact-info.service';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '../../common/enums/role.enum';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';

@ApiTags('Contact Info')
@Controller('contact-info')
export class ContactInfoController {
  constructor(private readonly contactInfoService: ContactInfoService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Public: View company contact details and hours' })
  async getContactInfo() {
    return this.contactInfoService.getContactInfo();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Put('admin')
  @ApiOperation({ summary: 'Admin Dashboard: Update company contact info' })
  async updateContactInfo(@Body() dto: UpdateContactInfoDto) {
    return this.contactInfoService.updateContactInfo(dto);
  }
}
