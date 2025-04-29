import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SeasonDocument = Season & Document;

@Schema()
export class Season {
  @Prop({ required: true })
  seriesId: string;

  @Prop({ required: true })
  seasonNumber: number;

  @Prop({ required: true, maxlength: 100 })
  title: string;
}

export const SeasonSchema = SchemaFactory.createForClass(Season);
