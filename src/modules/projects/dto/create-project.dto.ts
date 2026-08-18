import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'Villa Stone Flooring & Marble Staircase' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Flooring' }) // Bathroom, Flooring, Kitchen, Stone & Marble, Staircase
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ example: 'Complete Italian marble slab flooring and grand staircase crafting.' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Mr. & Mrs. Sharma', required: false })
  @IsString()
  @IsOptional()
  clientName?: string;

  @ApiProperty({ example: 'Beverly Hills, CA', required: false })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ example: 'January 2026', required: false })
  @IsString()
  @IsOptional()
  completionDate?: string;

  @ApiProperty({ example: '/uploads/gallery/cover-1.jpg' })
  @IsString()
  @IsNotEmpty()
  coverImage: string;

  @ApiProperty({ example: 'https://youtube.com/watch?v=sample', required: false })
  @IsString()
  @IsOptional()
  videoUrl?: string;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;
}
