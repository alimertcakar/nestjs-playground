import { Module } from '@nestjs/common';
import { TechnologyController } from 'src/technology/technology.controller';
import { TechnologyService } from 'src/technology/technology.service';
import { WorkController } from 'src/work/work.controller';
import { WorkModule } from 'src/work/work.module';
import { WorkService } from 'src/work/work.service';

@Module({
  controllers: [TechnologyController, WorkController],
  providers: [TechnologyService],
  exports: [],
  imports: [WorkModule],
})
export class PortfolioModule {}
