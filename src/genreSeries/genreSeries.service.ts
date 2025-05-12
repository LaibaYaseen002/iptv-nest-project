import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenreSeries } from '../genreSeries/genreSeries.model';
import { Series } from '../series/series.model';
import { CreateGenreDto } from './dto/genreSeries.dto';

@Injectable()
export class GenreSeriesService {
  constructor(
    @InjectRepository(GenreSeries)
    private genreSeriesRepo: Repository<GenreSeries>,

    @InjectRepository(Series)
    private seriesRepo: Repository<Series>,
  ) {}

  async getAll(): Promise<GenreSeries[]> {
    return this.genreSeriesRepo.find({ relations: ['series'] });
  }

  async create(dto: CreateGenreDto): Promise<GenreSeries> {
    const genre = this.genreSeriesRepo.create({ name: dto.name });

    if (dto.seriesIds && dto.seriesIds.length > 0) {
      const series = await this.seriesRepo.findByIds(dto.seriesIds);
      genre.series = series;
    }

    return this.genreSeriesRepo.save(genre);
  }

  async delete(id: number): Promise<void> {
    const result = await this.genreSeriesRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('GenreSeries not found');
  }
}
