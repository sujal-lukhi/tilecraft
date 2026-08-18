import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'John Doe', required: false })
  @IsString()
  @IsOptional()
  fullName?: string;

  @ApiProperty({ example: '+1 234 567 8900', required: false })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: '/uploads/avatars/user.jpg', required: false })
  @IsString()
  @IsOptional()
  avatar?: string;
}
