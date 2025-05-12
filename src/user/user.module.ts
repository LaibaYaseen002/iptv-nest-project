import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller'; 
import { Series } from '../series/series.model';
import { Stream } from '../stream/stream.model';
import { File } from '../file/file.model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Series, Stream, File])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
