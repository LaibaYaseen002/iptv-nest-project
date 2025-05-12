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
import { StreamService } from './stream.service';
import { CreateStreamDto, UpdateStreamDto } from './dto/stream.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.decorator';
import { User as UserEntity } from '../user/user.model';
import { ParseIntPipe } from '@nestjs/common';

@Controller('streams')
export class StreamController {
  constructor(private readonly streamService: StreamService) {}

  @Get()
  getAll() {
    return this.streamService.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(@Body() body: CreateStreamDto, @User() user: UserEntity) {
    return this.streamService.create(body, user);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateStreamDto
  ) {
    return this.streamService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.streamService.delete(id);
  }
}
