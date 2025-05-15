import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodeController } from './episode.controller';
import { EpisodeService } from './episode.service';
import { Episode, } from './episode.model';
import { Season } from '../season/season.model';

@Module({
  imports: [TypeOrmModule.forFeature([Episode, Season])],
  controllers: [EpisodeController],
  providers: [EpisodeService],
})
export class EpisodeModule {}
