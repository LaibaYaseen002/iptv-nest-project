import {
  Controller,
  Post,
  Get,
  Body,
  Delete,
  Put,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { GenreSeriesService } from './genreSeries.service';
import { CreateGenreDto } from './dto/genreSeries.dto';

@Controller('genreSeries')
export class GenreSeriesController {
  constructor(private readonly genreSeriesService: GenreSeriesService) {}

  @Get()
  getAll() {
    return this.genreSeriesService.getAll();
  }

  @Post()
  createGenreSeries(@Body() body: CreateGenreDto) {
    return this.genreSeriesService.create(body);
  }

@Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateGenreDto
  ) {
    return this.genreSeriesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.genreSeriesService.delete(id);
  }
}
