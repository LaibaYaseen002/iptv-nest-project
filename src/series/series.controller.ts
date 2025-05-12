import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto, UpdateSeriesDto } from './dto/series.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.decorator'; 
import { User as UserEntity } from '../user/user.model'; 

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  getAll() {
    return this.seriesService.getAll();
  }

  @UseGuards(AuthGuard('jwt')) 
  @Post('create')
  create(
    @Body() body: CreateSeriesDto,
    @User() user: UserEntity 
  ) {
    return this.seriesService.create(body, user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateSeriesDto) {
    return this.seriesService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.seriesService.delete(+id);
  }
}
