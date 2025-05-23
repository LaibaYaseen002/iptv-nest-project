import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeasonService } from './season.service';
import { CreateSeasonDto, UpdateSeasonDto } from './dto/season.dto';

@Controller('season')
export class SeasonController {
  constructor(private readonly seasonService: SeasonService) {}

  @Get()
  async getAll() {
    return this.seasonService.getAll();
  }

  @Post('create')
  async create(@Body() createSeasonDto: CreateSeasonDto) {
    return this.seasonService.create(createSeasonDto);
  }
  async update(
    @Param('id') id: string,
    @Body() updateSeasonDto: UpdateSeasonDto,
  ) {
    return this.seasonService.update(+id, updateSeasonDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.seasonService.delete(+id);
  }
}
