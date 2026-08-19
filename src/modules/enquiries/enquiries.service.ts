import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';
import { UpdateEnquiryStatusDto } from './dto/update-enquiry-status.dto';
import { MailService } from '../../integrations/mail/mail.service';

@Injectable()
export class EnquiriesService {
  private readonly logger = new Logger(EnquiriesService.name);

  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}

  async createEnquiry(dto: CreateEnquiryDto, customerId?: string) {
    const enquiry = await this.prisma.enquiry.create({
      data: {
        ...dto,
        customerId: customerId || null,
        status: 'PENDING',
      },
    });

    // Send email alert to admin (tilecraftinteriors1@gmail.com) and confirmation to customer
    try {
      const emailPromises: Promise<any>[] = [
        this.mailService.sendNewEnquiryAlertToAdmin(enquiry),
      ];

      if (enquiry.email) {
        emailPromises.push(this.mailService.sendCustomerConfirmation(enquiry));
      }

      await Promise.allSettled(emailPromises);
    } catch (e: any) {
      this.logger.warn(`Could not dispatch email notification: ${e.message}`);
    }

    return enquiry;
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
