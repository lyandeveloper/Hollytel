import {
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';
import Hotel from './Hotel';
import User from './User';

@Entity()
export default class FavoritesHotels {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => Hotel)
  @JoinColumn()
  hotel!: Hotel;

  @OneToOne((type) => User)
  @JoinColumn()
  user!: User;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
