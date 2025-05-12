import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre.model';
import { Series } from '../series/series.model';
import { Stream } from '../stream/stream.model';
import { CreateGenreDto } from './dto/genre.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepo: Repository<Genre>,

    @InjectRepository(Series)
    private seriesRepo: Repository<Series>, 

    @InjectRepository(Stream)
    private streamRepo: Repository<Stream>, 
  ) {}

  
  async create(dto: CreateGenreDto): Promise<Genre> {
    const genre = this.genreRepo.create({ name: dto.name });

    
    if (dto.seriesIds?.length) {
      const series = await this.seriesRepo.findByIds(dto.seriesIds);
      genre.series = series;
    }

    
    if (dto.streamIds?.length) {
      const streams = await this.streamRepo.findByIds(dto.streamIds);
      genre.streams = streams;
    }

    return this.genreRepo.save(genre);
  }

  
  async getAll(): Promise<Genre[]> {
    return this.genreRepo.find({
      relations: ['series', 'streams'],  
    });
  }

  
  async getById(id: number): Promise<Genre> {
    const genre = await this.genreRepo.findOne({
      where: { id },
      relations: ['series', 'streams'],  
    });

    if (!genre) {
      throw new Error('Genre not found');
    }

    return genre;
  }
}
