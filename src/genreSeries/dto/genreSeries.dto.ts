import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreSeriesDto {
  @IsNotEmpty()
  @IsString()
  genreId: string;

  @IsNotEmpty()
  @IsString()
  seriesId: string;

  @IsNotEmpty()
  @IsString()
  title: string;
}

export class UpdateGenreSeriesDto {
  @IsString()
  genreId?: string;

  @IsString()
  seriesId?: string;

  @IsString()
  title?: string;
}
