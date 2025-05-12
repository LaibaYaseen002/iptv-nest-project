import { IsString, IsOptional } from 'class-validator';

export class CreateStreamDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateStreamDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
