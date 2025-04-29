import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreSeriesController } from './genreSeries.controller';
import { GenreSeriesService } from './genreSeries.service';
import { GenreSeries, GenreSeriesSchema } from './genreSeries.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GenreSeries.name, schema: GenreSeriesSchema },
    ]),
  ],
  controllers: [GenreSeriesController],
  providers: [GenreSeriesService],
})
export class GenreSeriesModule {}
