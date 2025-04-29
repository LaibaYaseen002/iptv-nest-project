import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenreSeriesService } from './genreSeries.service';
import {
  CreateGenreSeriesDto,
  UpdateGenreSeriesDto,
} from './dto/genreSeries.dto';

@Controller('genreSeries')
export class GenreSeriesController {
  constructor(private readonly genreSeriesService: GenreSeriesService) {}

  @Get()
  async getAll() {
    return this.genreSeriesService.getAll();
  }

  @Post('create')
  async create(@Body() createGenreSeriesDto: CreateGenreSeriesDto) {
    return this.genreSeriesService.create(createGenreSeriesDto);
  }
}
