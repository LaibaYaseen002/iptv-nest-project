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
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGenreSeriesDto: UpdateGenreSeriesDto,
  ) {
    return this.genreSeriesService.update(id, updateGenreSeriesDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.genreSeriesService.delete(id);
  }
}
