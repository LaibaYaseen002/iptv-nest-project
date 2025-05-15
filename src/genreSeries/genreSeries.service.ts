import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenreSeries } from '../genreSeries/genreSeries.model';
import { Series } from '../series/series.model';
import { CreateGenreDto } from './dto/genreSeries.dto';
import { Genre } from '../genre/genre.model';

@Injectable()
export class GenreSeriesService {
  constructor(
    @InjectRepository(GenreSeries)
    private genreSeriesRepo: Repository<GenreSeries>,

    @InjectRepository(Series)
    private seriesRepo: Repository<Series>,

    @InjectRepository(Genre)
    private genreRepo: Repository<Genre>,
  ) {}

  async getAll(): Promise<GenreSeries[]> {
    return this.genreSeriesRepo.find({ relations: ['series', 'genre'] });
  }

  async create(dto: CreateGenreDto): Promise<GenreSeries> {
    const genre = await this.genreRepo.findOneBy({ id: dto.genreId });
    const series = await this.seriesRepo.findOneBy({ id: dto.seriesIds})
    
    if (!series) throw new NotFoundException('Series not found');
    if (!genre) throw new NotFoundException('Genre not found');

    const genreSeries = this.genreSeriesRepo.create({
      name: dto.name,
      series,
      genre,
    })

     return this.genreSeriesRepo.save(genreSeries);
    }

  async update(id: number, dto: CreateGenreDto): Promise<GenreSeries> {
    
    const genreSeries = await this.genreSeriesRepo.findOne({ where: { id } });

    if (!genreSeries) {
      throw new NotFoundException(`GenreSeries with id ${id} not found`);
    }

    
    await this.genreSeriesRepo
      .createQueryBuilder()
      .update(GenreSeries)
      .set({ name: dto.name }) 
      .where('id = :id', { id }) 
      .execute();

   
    if (dto.seriesIds) {
      const series = await this.seriesRepo.findOneBy({ id: dto.seriesIds});
      if (!series) throw new NotFoundException('Series not found');
      genreSeries.series = series;
    }

    
    return this.genreSeriesRepo.save(genreSeries);
  }

  async delete(id: number): Promise<void> {
    const result = await this.genreSeriesRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('GenreSeries not found');
  }
}
