import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';

@Injectable()
export class ContactInfoService {
  constructor(private prisma: PrismaService) {}

  async getContactInfo() {
    const info = await this.prisma.contactInfo.findFirst();
    if (!info) {
      return this.prisma.contactInfo.create({
        data: {
          address: '100 Tilecraft Blvd, Marble City',
          phone: '+1 (800) 555-TILE',
          email: 'contact@tilecraftinteriors.com',
          workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM',
          mapUrl: 'https://maps.google.com',
          socialLinks: JSON.stringify({
            instagram: 'https://instagram.com/tilecraftinteriors',
            facebook: 'https://facebook.com/tilecraftinteriors',
          }),
        },
      });
    }
    return info;
  }

  async updateContactInfo(dto: UpdateContactInfoDto) {
    const info = await this.getContactInfo();
    return this.prisma.contactInfo.update({
      where: { id: info.id },
      data: dto,
    });
  }
}
