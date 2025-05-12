import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Episode } from '../episode/episode.model';

@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seriesId: string;

  @Column()
  seasonNumber: number;

  @Column({ length: 100 })
  title: string;

  @OneToMany(() => Episode, (episode) => episode.season)
  episodes: Episode[];
}
