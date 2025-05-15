import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Episode } from './episode.model';
import { CreateEpisodeDto, UpdateEpisodeDto } from './dto/episode.dto';
import { Season } from '../season/season.model';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(Episode)
    private episodeRepository: Repository<Episode>,

     @InjectRepository(Season)
  private seasonRepository: Repository<Season>,
  ) {}

  async getAll(): Promise<Episode[]> {
    return this.episodeRepository.find({ relations: ['season'] });
  }

  async getOne(id: number): Promise<Episode> {
    const episode = await this.episodeRepository.findOne({
      where: { id },
      relations: ['season'],
    });

    if (!episode) {
      throw new NotFoundException(`Episode with ID ${id} not found`);
    }

    return episode;
  }

  async create(createEpisodeDto: CreateEpisodeDto): Promise<Episode> {
    const season = await this.seasonRepository.findOne({
      where: { id: createEpisodeDto.seasonId}
    });
    if ( !season) {
      throw new NotFoundException(`Season with ID ${createEpisodeDto.seasonId} not found`);
    }

    const episode = this.episodeRepository.create({
      ...createEpisodeDto,
      season
    })
    return this.episodeRepository.save(episode);
  }

  async update(id: number, updateEpisodeDto: UpdateEpisodeDto): Promise<Episode> {
    const episode = await this.episodeRepository.findOne({
      where: { id: Number(id) },
      relations: ['season'],
    });

    if (!episode) {
      throw new NotFoundException(`Episode with ID ${id} not found`);
    }

    Object.assign(episode, updateEpisodeDto);
    return this.episodeRepository.save(episode);
  }

  async delete(id: number): Promise<void> {
    const result = await this.episodeRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Episode with ID ${id} not found`);
    }
  }
}
