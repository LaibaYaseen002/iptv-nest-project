import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Series } from '../series/series.model';
import { Stream } from '../stream/stream.model';

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
  @JoinTable()
  streams: Stream[];
}
