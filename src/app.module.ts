import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';
import { SeriesModule } from './series/series.module';
import { SeasonModule } from './season/season.module';
import { EpisodeModule } from './episode/episode.module';
import { StreamModule } from './stream/stream.module';
import { FileModule } from './file/file.module';
import { GenreSeriesModule } from './genreSeries/genreSeries.module';
import { JwtStrategy } from './auth/jwt.strategy'; 
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'postgres', 
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgresql',
  database: 'mydb',
  entities: [__dirname + '/**/*.model{.ts,.js}'], 
  synchronize: true,
}),

    UserModule,
    GenreModule,
    SeriesModule,
    SeasonModule,
    EpisodeModule,
    StreamModule,
    FileModule,
    GenreSeriesModule,
    PassportModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
