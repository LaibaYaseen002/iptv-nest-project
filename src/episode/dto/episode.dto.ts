import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateEpisodeDto {
  @IsNotEmpty()
  @IsNumber()
  seasonId: number;

  @IsNotEmpty()
  @IsNumber()
  seasonNumber: number;


  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  episodeNumber: number; 

  @IsNotEmpty()
  @IsNumber()
  duration: number; 
}

export class UpdateEpisodeDto {
  @IsNumber()
  seasonId?: number;

  @IsNumber()
  episodeNumber?: number;

  @IsString()
  title?: string;

  @IsNumber()
  seasonNumber?: number;

  @IsNumber()
  duration?: number;
}
