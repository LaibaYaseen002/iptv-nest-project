import {
  Controller,
  Post,
  Get,
  Body,
  Delete,
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
  create(@Body() body: CreateGenreDto) {
    return this.genreSeriesService.create(body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.genreSeriesService.delete(id);
  }
}
