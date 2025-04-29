import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto, UpdateGenreDto } from './dto/genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  async getAll() {
    return this.genreService.getAll();
  }

  @Post('create')
  async create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ) {
    return this.genreService.update(id, updateGenreDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.genreService.delete(id);
  }
}
