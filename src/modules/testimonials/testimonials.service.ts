import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';

@Injectable()
export class TestimonialsService {
  constructor(private prisma: PrismaService) {}

  async findAllPublic() {
    return this.prisma.testimonial.findMany({
      where: { isApproved: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAllAdmin() {
    return this.prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(dto: CreateTestimonialDto) {
    return this.prisma.testimonial.create({
      data: dto,
    });
  }

  async toggleApproval(id: string, isApproved: boolean) {
    const testimonial = await this.prisma.testimonial.findUnique({ where: { id } });
    if (!testimonial) {
      throw new NotFoundException(`Testimonial with ID ${id} not found`);
    }

    return this.prisma.testimonial.update({
      where: { id },
      data: { isApproved },
    });
  }

  async remove(id: string) {
    const testimonial = await this.prisma.testimonial.findUnique({ where: { id } });
    if (!testimonial) {
      throw new NotFoundException(`Testimonial with ID ${id} not found`);
    }

    await this.prisma.testimonial.delete({ where: { id } });
    return { message: 'Testimonial deleted successfully' };
  }
}
