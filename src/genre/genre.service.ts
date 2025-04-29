import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Genre, GenreDocument } from './genre.model';
import { CreateGenreDto, UpdateGenreDto } from './dto/genre.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre.name) private genreModel: Model<GenreDocument>,
  ) {}

  async getAll(): Promise<Genre[]> {
    return this.genreModel.find().exec();
  }

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genreModel.create(createGenreDto);
  }
  async update(
    id: string,
    updateGenreDto: UpdateGenreDto,
  ): Promise<Genre | null> {
    return this.genreModel.findByIdAndUpdate(id, updateGenreDto, { new: true });
  }

  async delete(id: string): Promise<null> {
    return this.genreModel.findByIdAndDelete(id);
  }
}
