import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
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
    if (!createEpisodeDto.title) {
      throw new BadRequestException('Title is required')
    }
    return this.episodeService.create(createEpisodeDto);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEpisodeDto: UpdateEpisodeDto,
  ) {
    return this.episodeService.update(Number(id), updateEpisodeDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.episodeService.delete(Number(id));
  }
}
