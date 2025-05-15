import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Season } from './season.model';
import { CreateSeasonDto, UpdateSeasonDto } from './dto/season.dto';

@Injectable()
export class SeasonService {
  constructor(
    @InjectRepository(Season)
    private seasonRepository: Repository<Season>,
  ) {}

  async getAll(): Promise<Season[]> {
    return this.seasonRepository.find({ relations: ['episodes'] });
  }

  async create(createSeasonDto: CreateSeasonDto): Promise<Season> {
    const season = this.seasonRepository.create(createSeasonDto);
    return this.seasonRepository.save(season);
  }

  async update(
    id: number,
    updateSeasonDto: UpdateSeasonDto,
  ): Promise<Season> {
    const season = await this.seasonRepository.findOne({
      where: { id },
      relations: ['episodes'],
    });

    if (!season) {
      throw new NotFoundException(`Season with ID ${id} not found`);
    }

    Object.assign(season, updateSeasonDto);
    return this.seasonRepository.save(season);
  }

  async delete(id: number): Promise<void> {
    await this.seasonRepository.delete(id);
  }
}
