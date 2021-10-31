import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologyController } from './technology/technology.controller';

@Module({
  imports: [],
  controllers: [AppController, TechnologyController],
  providers: [AppService],
})
export class AppModule {}
