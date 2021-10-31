import { TechnologyService } from './technology.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateTechDto } from 'src/dtos/CreateTech';

@Controller('tech')
export class TechnologyController {
  constructor(private technologyService: TechnologyService) {}

  @Post()
  createTech(@Req() request: Request, @Body() body: CreateTechDto) {
    console.log(body, 'body');
    return 'yo';
  }

  @Get()
  get(@Query() query: any) {
    console.log(query, 'query');
    return this.technologyService.findAll();
  }
}
