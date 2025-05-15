import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { GenreService } from '../genre/genre.service';
import { CreateGenreDto, UpdateGenreDto } from './dto/genre.dto';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  getAllGenres() {
    return this.genreService.getAll();
  }

  @Post()
  createGenre(@Body() dto: CreateGenreDto) {
    return this.genreService.create(dto);
  }

@Patch(':id')
  updateGenre(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateGenreDto,
  ) {
    return this.genreService.update(id, dto);
  }

  @Delete(':id')
deleteGenre(@Param('id', ParseIntPipe) id: number) {
  return this.genreService.delete(id);
}

}

