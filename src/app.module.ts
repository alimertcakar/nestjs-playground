import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [PortfolioModule, WorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
