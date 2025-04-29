import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FileDocument } from './file.model';
import { CreateFileDto, UpdateFileDto } from './dto/file.dto';

@Injectable()
export class FileService {
  constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {}

  async getAll(): Promise<File[]> {
    return this.fileModel.find().exec();
  }

  async create(createFileDto: CreateFileDto): Promise<File> {
    return this.fileModel.create(createFileDto);
  }
}
