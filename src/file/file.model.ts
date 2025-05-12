import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../user/user.model';

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  fileType: string;

  @Column()
  url: string;

  @CreateDateColumn()
  uploadedAt: Date;

  @ManyToOne(() => User, (user) => user.files, { eager: true })
  uploadedBy: User;
}

