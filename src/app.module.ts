import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';
import { SeriesModule } from './series/series.module';
import { SeasonModule } from './season/season.module';
import { EpisodeModule } from './episode/episode.module';
import { StreamModule } from './stream/stream.module';
import { FileModule } from './file/file.module';
import { GenreSeriesModule } from './genreSeries/genreSeries.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user:user123@cluster0.uogjtlx.mongodb.net/nestjs',
    ),
    UserModule,
    GenreModule,
    SeriesModule,
    SeasonModule,
    EpisodeModule,
    StreamModule,
    FileModule,
    GenreSeriesModule,
  ],
})
export class AppModule {}
