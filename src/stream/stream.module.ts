import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StreamController } from './stream.controller';
import { StreamService } from './stream.service';
import { Stream, StreamSchema } from './stream.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stream.name, schema: StreamSchema }]),
  ],
  controllers: [StreamController],
  providers: [StreamService],
})
export class StreamModule {}
