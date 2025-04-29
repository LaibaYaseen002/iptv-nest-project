import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stream, StreamDocument } from './stream.model';
import { CreateStreamDto, UpdateStreamDto } from './dto/stream.dto';

@Injectable()
export class StreamService {
  constructor(
    @InjectModel(Stream.name) private streamModel: Model<StreamDocument>,
  ) {}

  async getAll(): Promise<Stream[]> {
    return this.streamModel.find().exec();
  }

  async create(createStreamDto: CreateStreamDto): Promise<Stream> {
    return this.streamModel.create(createStreamDto);
  }
}
