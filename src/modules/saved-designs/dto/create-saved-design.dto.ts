import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSavedDesignDto {
  @ApiProperty({ example: 'proj-uuid-123', required: false })
  @IsString()
  @IsOptional()
  projectId?: string;

  @ApiProperty({ example: 'Modern Waterfall Kitchen Island' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '/uploads/gallery/kitchen-1.jpg' })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({ example: 'Consider this granite pattern for our kitchen renovation.', required: false })
  @IsString()
  @IsOptional()
  notes?: string;
}
