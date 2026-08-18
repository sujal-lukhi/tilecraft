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
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { EnquiriesService } from './enquiries.service';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';
import { UpdateEnquiryStatusDto } from './dto/update-enquiry-status.dto';
import { Public } from '../../common/decorators/public.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '../../common/enums/role.enum';

@ApiTags('Enquiries & Quotes')
@Controller('enquiries')
export class EnquiriesController {
  constructor(private readonly enquiriesService: EnquiriesService) {}

  @Public()
  @Post('public')
  @ApiOperation({ summary: 'Public: Submit Quote Request / Contact Enquiry (No login needed)' })
  async createPublicEnquiry(@Body() dto: CreateEnquiryDto) {
    return this.enquiriesService.createEnquiry(dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('customer')
  @ApiOperation({ summary: 'Customer: Request Quote or Book Site Visit (LoggedIn)' })
  async createCustomerEnquiry(
    @CurrentUser('id') customerId: string,
    @Body() dto: CreateEnquiryDto,
  ) {
    return this.enquiriesService.createEnquiry(dto, customerId);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('my-enquiries')
  @ApiOperation({ summary: 'Customer Dashboard: View My Enquiries & Appointments' })
  async getMyEnquiries(@CurrentUser('id') customerId: string) {
    return this.enquiriesService.findCustomerEnquiries(customerId);
  }

  // Admin Routes
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('admin/all')
  @ApiOperation({ summary: 'Admin Dashboard: Manage & track all customer enquiries' })
  @ApiQuery({ name: 'status', required: false, example: 'PENDING' })
  async getAllForAdmin(@Query('status') status?: string) {
    return this.enquiriesService.findAllForAdmin(status);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Patch('admin/:id/status')
  @ApiOperation({ summary: 'Admin Dashboard: Update enquiry status & admin notes' })
  async updateStatus(@Param('id') id: string, @Body() dto: UpdateEnquiryStatusDto) {
    return this.enquiriesService.updateStatus(id, dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete('admin/:id')
  @ApiOperation({ summary: 'Admin Dashboard: Delete enquiry record' })
  async deleteEnquiry(@Param('id') id: string) {
    return this.enquiriesService.deleteEnquiry(id);
  }
}
