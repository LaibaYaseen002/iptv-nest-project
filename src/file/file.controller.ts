import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto, UpdateFileDto } from './dto/file.dto';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  async getAll() {
    return this.fileService.getAll();
  }

  @Post('create')
  async upload(@Body() createFileDto: CreateFileDto) {
    return this.fileService.create(createFileDto);
  }
}
