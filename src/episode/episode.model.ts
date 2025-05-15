import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Season } from '../season/season.model';

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seasonId: number;

  @ManyToOne(() => Season, (season) => season.episodes)
  @JoinColumn({ name: 'seasonId' })
  season: Season;

  @Column({ type: 'int', nullable: true })
  episodeNumber: number;

  @Column({ length: 100 })
  title: string;

  @Column()
  seasonNumber: number;

  @Column()
  duration: number; 
}
