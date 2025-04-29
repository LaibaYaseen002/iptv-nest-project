import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenreSeriesDocument = GenreSeries & Document;

@Schema()
export class GenreSeries {
  @Prop({ required: true })
  genreId: string;

  @Prop({ required: true })
  seriesId: string;

  @Prop({ required: true })
  title: string;
}

export const GenreSeriesSchema = SchemaFactory.createForClass(GenreSeries);
