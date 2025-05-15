import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stream } from './stream.model';
import { CreateStreamDto, UpdateStreamDto } from './dto/stream.dto';
import { User } from '../user/user.model';
import { Genre } from '../genre/genre.model';
@Injectable()
export class StreamService {
  constructor(
    @InjectRepository(Stream)
    private streamRepo: Repository<Stream>,

     @InjectRepository(Genre)
  private genreRepo: Repository<Genre>,

  ) {}

  async getAll(): Promise<Stream[]> {
    return this.streamRepo.find();
  }

  async create(createDto: CreateStreamDto, user: User): Promise<Stream> {
let genres: Genre[] = [];

  if (createDto.genreIds) {
    genres = await this.genreRepo.findByIds(createDto.genreIds);
  }


    const stream = this.streamRepo.create({ ...createDto,
       createdBy: user,
        genres,

     });
    return this.streamRepo.save(stream);
  }

  async update(id: number, updateDto: UpdateStreamDto): Promise<Stream> {
    await this.streamRepo.update({ id }, updateDto);
    const updated = await this.streamRepo.findOne({ where: { id } });
    if (!updated) throw new NotFoundException('Stream not found');
    return updated;
  }

  async delete(id: number): Promise<void> {
    const result = await this.streamRepo.delete({ id });
    if (result.affected === 0) throw new NotFoundException('Stream not found');
  }
}

