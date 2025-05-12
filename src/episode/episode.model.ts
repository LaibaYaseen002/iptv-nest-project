import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Season } from '../season/season.model';

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seasonId: string;

  @ManyToOne(() => Season, (season) => season.episodes)
  season: Season;

  @Column()
  episodeNumber: number;

  @Column({ length: 100 })
  title: string;

  @Column()
  seasonNumber: number;

  @Column()
  duration: number; 
}
