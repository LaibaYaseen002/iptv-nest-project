import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StreamService } from './stream.service';
import { CreateStreamDto, UpdateStreamDto } from './dto/stream.dto';

@Controller('stream')
export class StreamController {
  constructor(private readonly streamService: StreamService) {}

  @Get()
  async getAll() {
    return this.streamService.getAll();
  }

  @Post('create')
  async create(@Body() createStreamDto: CreateStreamDto) {
    return this.streamService.create(createStreamDto);
  }
}
