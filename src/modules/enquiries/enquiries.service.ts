import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';
import { UpdateEnquiryStatusDto } from './dto/update-enquiry-status.dto';

@Injectable()
export class EnquiriesService {
  constructor(private prisma: PrismaService) {}

  async createEnquiry(dto: CreateEnquiryDto, customerId?: string) {
    return this.prisma.enquiry.create({
      data: {
        ...dto,
        customerId: customerId || null,
        status: 'PENDING',
      },
    });
  }

  async findCustomerEnquiries(customerId: string) {
    return this.prisma.enquiry.findMany({
      where: { customerId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAllForAdmin(status?: string) {
    return this.prisma.enquiry.findMany({
      where: status ? { status } : {},
      include: {
        customer: {
          select: { id: true, email: true, fullName: true, phone: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateStatus(id: string, dto: UpdateEnquiryStatusDto) {
    const enquiry = await this.prisma.enquiry.findUnique({ where: { id } });
    if (!enquiry) {
      throw new NotFoundException(`Enquiry with ID ${id} not found`);
    }

    return this.prisma.enquiry.update({
      where: { id },
      data: {
        status: dto.status,
        ...(dto.adminNotes !== undefined ? { adminNotes: dto.adminNotes } : {}),
      },
    });
  }

  async deleteEnquiry(id: string) {
    const enquiry = await this.prisma.enquiry.findUnique({ where: { id } });
    if (!enquiry) {
      throw new NotFoundException(`Enquiry with ID ${id} not found`);
    }

    await this.prisma.enquiry.delete({ where: { id } });
    return { message: 'Enquiry deleted successfully' };
  }
}
