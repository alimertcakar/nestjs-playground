import { TechnologyService } from 'src/technology/technology.service';
import { Controller, Get } from '@nestjs/common';
import { WorkService } from './work.service';

@Controller('work')
export class WorkController {
  constructor(private workService: WorkService) {}

  @Get()
  findAll() {
    return this.workService.findAll();
  }
}
