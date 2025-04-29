import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CreateStreamDto {
  @IsNotEmpty()
  @IsString()
  episodeId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsEnum(['360p', '480p', '720p', '1080p', '4K'])
  quality: string;

  @IsNotEmpty()
  @IsString()
  streamingPlatform: string;
}

export class UpdateStreamDto {
  @IsString()
  episodeId?: string;

  @IsString()
  title?: string;

  @IsEnum(['360p', '480p', '720p', '1080p', '4K'])
  quality?: string;

  @IsString()
  streamingPlatform?: string;
}
