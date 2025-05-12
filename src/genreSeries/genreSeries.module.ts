import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreSeries } from './genreSeries.model';
import { GenreSeriesService } from './genreSeries.service';
import { GenreSeriesController } from './genreSeries.controller';
import { Genre } from '../genre/genre.model'; 
import { Series } from '../series/series.model';

@Module({
  imports: [TypeOrmModule.forFeature([GenreSeries, Genre, Series])],
  providers: [GenreSeriesService],
  controllers: [GenreSeriesController],
  exports: [GenreSeriesService],
})
export class GenreSeriesModule {}
