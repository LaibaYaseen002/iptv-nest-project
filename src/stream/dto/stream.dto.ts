import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';

export class CreateStreamDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

    @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true }) 
  genreIds?: number[];
}

export class UpdateStreamDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
