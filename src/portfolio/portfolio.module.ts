import { Module } from '@nestjs/common';
import { TechnologyController } from 'src/technology/technology.controller';
import { TechnologyService } from 'src/technology/technology.service';

@Module({
  controllers: [TechnologyController],
  providers: [TechnologyService],
  exports: [],
  imports: [],
})
export class PortfolioModule {}
