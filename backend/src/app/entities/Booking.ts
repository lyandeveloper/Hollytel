import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './User';
import Hotel from './Hotel';

@Entity()
export default class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => User)
  @JoinColumn()
  user!: User;

  @OneToOne((type) => Hotel)
  @JoinColumn()
  hotel!: Hotel;

  @Column()
  rooms!: number;

  @Column()
  guests!: number;

  @CreateDateColumn({ select: false })
  created_at!: Date;

  @UpdateDateColumn({ select: false })
  updated_at!: Date;
}
