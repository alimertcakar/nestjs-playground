import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateTechDto } from './create-tech';

export class UpdateTechDto extends PartialType(CreateTechDto) {}
