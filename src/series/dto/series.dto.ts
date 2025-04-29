import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';

export class CreateSeriesDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  releaseDate?: Date;
}

export class UpdateSeriesDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  releaseDate?: Date;
}
