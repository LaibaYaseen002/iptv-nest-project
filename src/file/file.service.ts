import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './file.model';
import { CreateFileDto } from './dto/file.dto';
import { User } from '../user/user.model';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private fileRepo: Repository<File>,
  ) {}

  async getAll(): Promise<File[]> {
    return this.fileRepo.find();
  }

  async create(fileMeta: { filename: string; fileType: string; url: string }, user: User): Promise<File> {
  const file = this.fileRepo.create({ ...fileMeta, uploadedBy: user });
  return this.fileRepo.save(file);
}


  async delete(id: number): Promise<void> {
    const result = await this.fileRepo.delete({ id });
    if (result.affected === 0) throw new NotFoundException('File not found');
  }
}
