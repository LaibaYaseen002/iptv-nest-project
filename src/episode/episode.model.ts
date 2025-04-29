import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EpisodeDocument = Episode & Document;

@Schema()
export class Episode {
  @Prop({ required: true })
  seasonId: string;

  @Prop({ required: true })
  episodeNumber: number;

  @Prop({ required: true, maxlength: 100 })
  title: string;

  @Prop({ required: true })
  seasonNumber: number;

  @Prop({ required: true })
  duration: number; // duration in minutes
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
