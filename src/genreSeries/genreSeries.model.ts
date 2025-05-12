import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Series } from '../series/series.model'

@Entity()
export class GenreSeries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Series, series => series.genres)
  series: Series[];
}
