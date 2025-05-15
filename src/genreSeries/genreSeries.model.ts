import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Series } from '../series/series.model';
import { Genre } from '../genre/genre.model';
@Entity()
export class GenreSeries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Series, series => series.genreSeries)
  @JoinColumn({ name: 'series_id'})
  series: Series;

  @ManyToOne(() => Genre, (genre) => genre.genreSeries)
  @JoinColumn({ name: 'genre_id' })
  genre: Genre; 
}