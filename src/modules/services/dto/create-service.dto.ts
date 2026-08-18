import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({ example: 'Bathroom Renovation & Tiling' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Bathroom' }) // Bathroom, Flooring, Kitchen, Stone & Marble, Staircase
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ example: 'Complete luxury bathroom stone tile installation and waterproofing solutions.' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Waterproofing, Marble Slabs, Custom Vanities', required: false })
  @IsString()
  @IsOptional()
  features?: string;

  @ApiProperty({ example: '/uploads/services/bathroom-icon.svg', required: false })
  @IsString()
  @IsOptional()
  iconUrl?: string;

  @ApiProperty({ example: '/uploads/services/bathroom-cover.jpg', required: false })
  @IsString()
  @IsOptional()
  coverImage?: string;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({ example: 1, required: false })
  @IsNumber()
  @IsOptional()
  orderIndex?: number;
}
