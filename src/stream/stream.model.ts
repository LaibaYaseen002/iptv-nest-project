import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StreamDocument = Stream & Document;

@Schema()
export class Stream {
  @Prop({ required: true })
  episodeId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, enum: ['360p', '480p', '720p', '1080p', '4K'] })
  quality: string;

  @Prop({ required: true })
  streamingPlatform: string;
}

export const StreamSchema = SchemaFactory.createForClass(Stream);
