import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { GenreSeriesService } from '../genreSeries/genreSeries.service';
import { CreateGenreDto } from './dto/genre.dto';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreSeriesService) {}

  @Get()
  getAllGenres() {
    return this.genreService.getAll();
  }

  @Post()
  createGenre(@Body() dto: CreateGenreDto) {
    return this.genreService.create(dto);
  }

  @Delete(':id')
  deleteGenre(@Param('id', ParseIntPipe) id: number) {
    return this.genreService.delete(id);
  }
}
