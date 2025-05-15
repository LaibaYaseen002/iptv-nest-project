import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.model';
import { Genre } from '../genre/genre.model';
import { GenreSeries } from 'src/genreSeries/genreSeries.model';
import { Season } from '../season/season.model';

@Entity()
export class Series {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.series, { eager: true })
  createdBy: User;

  @ManyToMany(() => Genre, (genre) => genre.series, { eager: true })
  genres: Genre[];

  @OneToMany(() => GenreSeries, (genreSeries) => genreSeries.series)
  genreSeries: GenreSeries[];

  @OneToMany(() => Season, (season) => season.series)
  seasons: Season[];
}
