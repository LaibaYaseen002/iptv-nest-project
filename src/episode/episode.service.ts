import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Episode, EpisodeDocument } from './episode.model';
import { CreateEpisodeDto, UpdateEpisodeDto } from './dto/episode.dto';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectModel(Episode.name) private episodeModel: Model<EpisodeDocument>,
  ) {}

  async getAll(): Promise<Episode[]> {
    return this.episodeModel.find().exec();
  }

  async create(createEpisodeDto: CreateEpisodeDto): Promise<Episode> {
    return this.episodeModel.create(createEpisodeDto);
  }
  async update(
    id: string,
    updateEpisodeDto: UpdateEpisodeDto,
  ): Promise<Episode | null> {
    return this.episodeModel.findByIdAndUpdate(id, updateEpisodeDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<null> {
    return this.episodeModel.findByIdAndDelete(id);
  }
}
