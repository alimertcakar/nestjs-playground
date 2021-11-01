import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTechDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
