import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenreSeries, GenreSeriesDocument } from './genreSeries.model';
import {
  CreateGenreSeriesDto,
  UpdateGenreSeriesDto,
} from './dto/genreSeries.dto';

@Injectable()
export class GenreSeriesService {
  constructor(
    @InjectModel(GenreSeries.name)
    private genreSeriesModel: Model<GenreSeriesDocument>,
  ) {}

  async getAll(): Promise<GenreSeries[]> {
    return this.genreSeriesModel.find().exec();
  }

  async create(
    createGenreSeriesDto: CreateGenreSeriesDto,
  ): Promise<GenreSeries> {
    return this.genreSeriesModel.create(createGenreSeriesDto);
  }
}
