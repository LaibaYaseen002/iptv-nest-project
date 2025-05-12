import { IsString } from 'class-validator';

export class CreateFileDto {
  @IsString()
  filename: string;

  @IsString()
  fileType: string;

  @IsString()
  url: string;
}
