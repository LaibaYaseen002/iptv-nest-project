import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateEpisodeDto {
  @IsNotEmpty()
  @IsString()
  seasonId: string;

  @IsNotEmpty()
  @IsNumber()
  episodeNumber: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  seasonNumber: number;

  @IsNotEmpty()
  @IsNumber()
  duration: number; // duration in minutes
}

export class UpdateEpisodeDto {
  @IsString()
  seasonId?: string;

  @IsNumber()
  episodeNumber?: number;

  @IsString()
  title?: string;

  @IsNumber()
  seasonNumber?: number;

  @IsNumber()
  duration?: number;
}
