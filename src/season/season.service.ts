import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Season, SeasonDocument } from './season.model';
import { CreateSeasonDto, UpdateSeasonDto } from './dto/season.dto';

@Injectable()
export class SeasonService {
  constructor(
    @InjectModel(Season.name) private seasonModel: Model<SeasonDocument>,
  ) {}

  async getAll(): Promise<Season[]> {
    return this.seasonModel.find().exec();
  }

  async create(createSeasonDto: CreateSeasonDto): Promise<Season> {
    return this.seasonModel.create(createSeasonDto);
  }
}
