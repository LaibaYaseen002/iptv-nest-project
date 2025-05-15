import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileService } from './file.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.decorator';
import { User as UserEntity } from '../user/user.model';
import { ParseIntPipe } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';


@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  getAll() {
    return this.fileService.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          console.log(' File received in interceptor:', file.originalname)
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @User() user: UserEntity,
  ) {
    if (!file) {
      console.log('No file uploaded!');
       throw new BadRequestException('File not received');
    }

    const fileMeta = {
    filename: file.filename,
    fileType: file.mimetype,
    url: `/uploads/${file.filename}`,
    }
    return this.fileService.create(fileMeta, user);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.fileService.delete(id);
  }
}

