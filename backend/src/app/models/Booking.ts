import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
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
}
