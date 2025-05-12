import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Series } from './series.model';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Series])],
  providers: [SeriesService],
  controllers: [SeriesController],
})
export class SeriesModule {}
