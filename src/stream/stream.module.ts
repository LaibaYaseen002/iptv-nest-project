import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stream } from './stream.model';
import { StreamService } from './stream.service';
import { StreamController } from './stream.controller';
import { Genre } from 'src/genre/genre.model';

@Module({
  imports: [TypeOrmModule.forFeature([Stream, Genre])],
  providers: [StreamService],
  controllers: [StreamController],
})
export class StreamModule {}

