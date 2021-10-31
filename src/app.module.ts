import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologyController } from './technology/technology.controller';
import { TechnologyService } from './technology/technology.service';

@Module({
  imports: [],
  controllers: [AppController, TechnologyController],
  providers: [AppService, TechnologyService],
})
export class AppModule {}
