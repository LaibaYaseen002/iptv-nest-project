import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true})
  seriesIds?: number;

  @IsNumber()
  genreId: number;
}
