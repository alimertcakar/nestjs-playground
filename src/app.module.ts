import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [PortfolioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
