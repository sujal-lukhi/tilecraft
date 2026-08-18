import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateEnquiryStatusDto {
  @ApiProperty({ example: 'IN_PROGRESS', enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'] })
  @IsString()
  @IsNotEmpty()
  @IsIn(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'])
  status: string;

  @ApiProperty({ example: 'Site visit scheduled for 2 PM with engineer John.', required: false })
  @IsString()
  @IsOptional()
  adminNotes?: string;
}
