import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateSeasonDto {
  @IsNotEmpty()
  @IsNumber()
  seriesId: number;

  @IsNotEmpty()
  @IsNumber()
  seasonNumber: number;

  @IsNotEmpty()
  @IsString()
  title: string;
}

export class UpdateSeasonDto {
  @IsNumber()
  seriesId?: string;

  @IsNumber()
  seasonNumber?: number;

  @IsString()
  title?: string;
}
