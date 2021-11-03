import { CreateTechDto } from './create-tech';
import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTechDto extends PartialType(CreateTechDto) {}
