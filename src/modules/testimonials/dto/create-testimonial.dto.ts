import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateTestimonialDto {
  @ApiProperty({ example: 'Michael Chang' })
  @IsString()
  @IsNotEmpty()
  clientName: string;

  @ApiProperty({ example: 'Homeowner, Manhattan Villa', required: false })
  @IsString()
  @IsOptional()
  roleOrLocation?: string;

  @ApiProperty({ example: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({ example: 'Tilecraft executed our marble flooring flawlessly. Exceptional craftsmanship!' })
  @IsString()
  @IsNotEmpty()
  comment: string;

  @ApiProperty({ example: '/uploads/avatars/client1.jpg', required: false })
  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  isApproved?: boolean;
}
