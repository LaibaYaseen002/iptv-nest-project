import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Episode } from '../episode/episode.model';
import { Series } from '../series/series.model';
@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seriesId: number;

  @Column()
  seasonNumber: number;

  @Column({ length: 100 })
  title: string;

  @OneToMany(() => Episode, (episode) => episode.season)
  episodes: Episode[];

   @ManyToOne(() => Series, (series) => series.seasons)
   @JoinColumn({ name: 'seriesId' })
   series: Series;
}
