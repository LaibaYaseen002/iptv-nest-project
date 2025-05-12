import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Series } from './series.model';
import { CreateSeriesDto, UpdateSeriesDto } from './dto/series.dto';
import { User } from '../user/user.model';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private seriesRepo: Repository<Series>,
  ) {}

  async getAll(): Promise<Series[]> {
    return this.seriesRepo.find(); // eager fetches user
  }

  async create(createDto: CreateSeriesDto, user: User): Promise<Series> {
    const series = this.seriesRepo.create({ ...createDto, createdBy: user });
    return await this.seriesRepo.save(series);
  }

  async update(id: number, updateDto: UpdateSeriesDto): Promise<Series> {
    await this.seriesRepo
      .createQueryBuilder()
      .update(Series)
      .set(updateDto)
      .where('id = :id', { id })
      .execute();

    const updated = await this.seriesRepo.findOne({ where: { id } });
    if (!updated) throw new NotFoundException('Series not found');
    return updated;
  }

  async delete(id: number): Promise<void> {
    const result = await this.seriesRepo
      .createQueryBuilder()
      .delete()
      .from(Series)
      .where('id = :id', { id })
      .execute();

    if (result.affected === 0) throw new NotFoundException('Series not found');
  }
}
