import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Hotel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  banner01!: string;

  @Column()
  banner02!: string;

  @Column()
  banner03!: string;

  @Column()
  banner04!: string;

  @Column()
  description!: string;

  @Column()
  city!: string;

  @Column()
  country!: string;

  @Column()
  address!: string;

  @Column()
  rooms!: number;

  @Column()
  guests!: number;

  @CreateDateColumn({ select: false })
  created_at!: Date;

  @UpdateDateColumn({ select: false })
  updated_at!: Date;
}
