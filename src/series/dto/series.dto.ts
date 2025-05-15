import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateSeriesDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  createdById: number;

  @IsNumber()
  genreIds: number[];
}

export class UpdateSeriesDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
