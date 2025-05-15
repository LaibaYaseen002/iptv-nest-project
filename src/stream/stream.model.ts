import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  JoinTable,
} from 'typeorm';
import { User } from '../user/user.model';
import { Genre } from '../genre/genre.model';

@Entity()
export class Stream {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.streams, { eager: true })
  createdBy: User;

  @ManyToMany(() => Genre, (genre) => genre.streams, { eager: true })
  @JoinTable()
   genres: Genre[];
}

