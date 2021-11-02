import { PartialType } from '@nestjs/mapped-types';
import { CreateTechDto } from './create-tech';

export class DeleteTechDto extends PartialType(CreateTechDto) {}
