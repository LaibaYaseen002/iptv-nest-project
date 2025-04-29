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
  async update(
    id: string,
    updateStreamDto: UpdateStreamDto,
  ): Promise<Stream | null> {
    return this.streamModel.findByIdAndUpdate(id, updateStreamDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<null> {
    return this.streamModel.findByIdAndDelete(id);
  }
}
