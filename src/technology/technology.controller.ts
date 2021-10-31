import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('tech')
export class TechnologyController {
  @Get('all')
  findAll(@Req() request: Request) {
    console.log(request);
    debugger;
    return 'hi';
  }

  @Post()
  createTech(@Req() request: Request, @Body() body: Body) {
    console.log(body, 'body');
    console.log('created tech');
  }
}
