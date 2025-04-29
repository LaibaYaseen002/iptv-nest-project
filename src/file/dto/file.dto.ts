import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateFileDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  filename: string;

  @IsNotEmpty()
  @IsString()
  path: string;

  @IsNotEmpty()
  @IsNumber()
  size: number;

  @IsNotEmpty()
  @IsDate()
  uploadedAt: Date;
}

export class UpdateFileDto {
  @IsString()
  title?: string;

  @IsString()
  filename?: string;

  @IsString()
  path?: string;

  @IsNumber()
  size?: number;

  @IsDate()
  uploadedAt?: Date;
}
