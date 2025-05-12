import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Series } from '../series/series.model'; 
import { Stream } from '../stream/stream.model';
import { File } from '../file/file.model';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => Series, (series) => series.createdBy)
  series: Series[];

  @OneToMany(() => Stream, (stream) => stream.createdBy)
  streams: Stream[];

  @OneToMany(() => File, (file) => file.uploadedBy)
  files: File[];
}