import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './genre.model';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { GenreSeriesModule } from '../genreSeries/genreSeries.module';
import { Series } from '../series/series.model';
import { Stream } from '../stream/stream.model';
@Module({
  imports: [TypeOrmModule.forFeature([Genre, Series, Stream]),
  GenreSeriesModule,
],
  controllers: [GenreController],
  providers: [GenreService],
  exports: [GenreService], 
})
export class GenreModule {}
