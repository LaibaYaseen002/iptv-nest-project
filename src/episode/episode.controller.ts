import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { CreateEpisodeDto, UpdateEpisodeDto } from './dto/episode.dto';

@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Get()
  async getAll() {
    return this.episodeService.getAll();
  }

  @Post('create')
  async create(@Body() createEpisodeDto: CreateEpisodeDto) {
    return this.episodeService.create(createEpisodeDto);
  }
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEpisodeDto: UpdateEpisodeDto,
  ) {
    return this.episodeService.update(id, updateEpisodeDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.episodeService.delete(id);
  }
}
