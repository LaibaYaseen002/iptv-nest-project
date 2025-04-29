import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateSeasonDto {
  @IsNotEmpty()
  @IsString()
  seriesId: string;

  @IsNotEmpty()
  @IsNumber()
  seasonNumber: number;

  @IsNotEmpty()
  @IsString()
  title: string;
}

export class UpdateSeasonDto {
  @IsString()
  seriesId?: string;

  @IsNumber()
  seasonNumber?: number;

  @IsString()
  title?: string;
}
