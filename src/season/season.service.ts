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
  async update(
    id: string,
    updateSeasonDto: UpdateSeasonDto,
  ): Promise<Season | null> {
    return this.seasonModel.findByIdAndUpdate(id, updateSeasonDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<null> {
    return this.seasonModel.findByIdAndDelete(id);
  }
}
