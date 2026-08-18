import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateContactInfoDto {
  @ApiProperty({ example: '100 Stone & Marble Way, Suite 400, New York, NY 10001' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: '+1 (800) 555-TILE' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'info@tilecraftinteriors.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Mon - Sat: 8:00 AM - 6:00 PM' })
  @IsString()
  @IsNotEmpty()
  workingHours: string;

  @ApiProperty({ example: 'https://maps.google.com/?q=Tilecraft', required: false })
  @IsString()
  @IsOptional()
  mapUrl?: string;

  @ApiProperty({ example: '{"instagram":"https://instagram.com/tilecraft","facebook":"https://facebook.com/tilecraft"}', required: false })
  @IsString()
  @IsOptional()
  socialLinks?: string;
}
