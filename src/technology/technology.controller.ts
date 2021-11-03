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
import _ from 'lodash';
import { WorkService } from 'src/work/work.service';
import { UpdateTechDto } from './dto/update-tech';
import { CreateTechDto } from './dto/create-tech';

@Controller('tech')
export class TechnologyController {
  constructor(
    private technologyService: TechnologyService,
    private workService: WorkService,
  ) {}

  @Post()
  createTech(@Req() request: Request, @Body() body: UpdateTechDto) {
    return 'yo';
  }

  @Get()
  get(@Query() query: any, @Body() body: CreateTechDto) {
    throw new NotImplementedException();
  }

  @Get('work-by-technology')
  findWorkByTechnology() {
    return this.workService.findAll();
  }
}
