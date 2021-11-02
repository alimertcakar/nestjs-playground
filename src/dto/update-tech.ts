import { PartialType } from '@nestjs/mapped-types';
import { CreateTechDto } from './create-tech';

export class UpdateTech extends PartialType(CreateTechDto) {}
