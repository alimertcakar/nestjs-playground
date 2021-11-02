import { PartialType } from '@nestjs/mapped-types';
import { CreateTechDto } from './create-tech';

export class UpdateTechDto extends PartialType(CreateTechDto) {}
