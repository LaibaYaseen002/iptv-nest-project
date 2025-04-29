import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto, UpdateSeriesDto } from './dto/series.dto';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  async getAll() {
    return this.seriesService.getAll();
  }

  @Post('create')
  async create(@Body() createSeriesDto: CreateSeriesDto) {
    return this.seriesService.create(createSeriesDto);
  }
  async update(
    @Param('id') id: string,
    @Body() updateSeriesDto: UpdateSeriesDto,
  ) {
    return this.seriesService.update(id, updateSeriesDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.seriesService.delete(id);
  }
}
