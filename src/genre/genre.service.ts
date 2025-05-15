import { Injectable, InternalServerErrorException, BadRequestException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre.model';
import { Series } from '../series/series.model';
import { Stream } from '../stream/stream.model';
import { CreateGenreDto, UpdateGenreDto } from './dto/genre.dto';

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

    
    if (dto.seriesIds && dto.seriesIds.length > 0) {
    const series = await this.seriesRepo.findByIds(dto.seriesIds);
    genre.series = series; 
  }


    
    if (dto.streamIds && dto.streamIds.length > 0) {
    const streams = await this.streamRepo.findByIds(dto.streamIds);
    genre.streams = streams; 
  }

    try {
      return await this.genreRepo.save(genre);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create genre');
    }
  }

  async update(id: number, updateDto: UpdateGenreDto): Promise<Genre> {
if (!Object.keys(updateDto).length) {
      throw new BadRequestException('No update values provided');
    }

    const genre = await this.genreRepo.findOne({ where: { id } });
    
    if (!genre) {
      throw new NotFoundException('Genre not found');
    }

    await this.genreRepo.createQueryBuilder()
      .update(Genre)
      .set(updateDto)
      .where("id = :id", { id })
      .execute();
    
    Object.assign(genre, updateDto);
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

  async delete(id: number): Promise<void> {
    const result = await this.genreRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }
  }
}
