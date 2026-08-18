import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEnquiryDto {
  @ApiProperty({ example: 'Alice Smith' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: 'alice@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+1 555 123 4567' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'Bathroom' }) // Bathroom, Flooring, Kitchen, Stone & Marble, Staircase
  @IsString()
  @IsNotEmpty()
  serviceType: string;

  @ApiProperty({ example: 'Looking to renovate a 120 sq ft bathroom with Italian marble tiles.' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ example: '2026-08-25', required: false })
  @IsString()
  @IsOptional()
  siteVisitDate?: string;
}
