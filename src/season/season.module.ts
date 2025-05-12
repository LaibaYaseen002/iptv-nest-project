import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm';
import { SeasonController } from './season.controller';
import { SeasonService } from './season.service';
import { Season } from './season.model';

@Module({
  imports: [TypeOrmModule.forFeature([Season])],
  controllers: [SeasonController],
  providers: [SeasonService],
})
export class SeasonModule {}
