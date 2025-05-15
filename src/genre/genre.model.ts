import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Series } from '../series/series.model';
import { Stream } from '../stream/stream.model';
import { GenreSeries } from '../genreSeries/genreSeries.model'
@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Series, (series) => series.genres)
  @JoinTable()
  series: Series[];

  @ManyToMany(() => Stream, (stream) => stream.genres)

  streams: Stream[];

  @OneToMany(() => GenreSeries, genreSeries => genreSeries.genre)
  genreSeries: GenreSeries[];
}
