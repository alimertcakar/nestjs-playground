import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('tech')
export class TechnologyController {
  @Get('all')
  findAll(@Req() request: Request) {
    console.log(request);
    debugger;
    return 'hi';
  }
}
