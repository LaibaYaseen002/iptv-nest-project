import { IsString, IsOptional } from 'class-validator';

export class CreateSeriesDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateSeriesDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
