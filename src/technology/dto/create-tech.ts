import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTechDto {
  @ApiProperty({ description: 'Teknoloji ismi' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
