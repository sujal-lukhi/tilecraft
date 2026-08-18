import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBeforeAfterDto {
  @ApiProperty({ example: 'Kitchen Transformation' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Kitchen' })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ example: '/uploads/before/kitchen-before.jpg' })
  @IsString()
  @IsNotEmpty()
  beforeImage: string;

  @ApiProperty({ example: '/uploads/after/kitchen-after.jpg' })
  @IsString()
  @IsNotEmpty()
  afterImage: string;

  @ApiProperty({ example: 'Replaced outdated ceramic counter with seamless granite slab.', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'proj-123', required: false })
  @IsString()
  @IsOptional()
  projectId?: string;
}
