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
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateTechDto } from 'src/dto/craete-tech';
import _ from 'lodash';

@Controller('tech')
export class TechnologyController {
  constructor(private technologyService: TechnologyService) {}

  @Post()
  createTech(@Req() request: Request, @Body() body: CreateTechDto) {
    return 'yo';
  }

  @Get()
  get(@Query() query: any) {
    throw new NotImplementedException();
  }
}
