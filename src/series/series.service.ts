import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Series, SeriesDocument } from './series.model';
import { CreateSeriesDto, UpdateSeriesDto } from './dto/series.dto';

@Injectable()
export class SeriesService {
  constructor(
    @InjectModel(Series.name) private seriesModel: Model<SeriesDocument>,
  ) {}

  async getAll(): Promise<Series[]> {
    return this.seriesModel.find().exec();
  }

  async create(createSeriesDto: CreateSeriesDto): Promise<Series> {
    return this.seriesModel.create(createSeriesDto);
  }
}
