import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Hotel from './Hotel';

@Entity()
export default class Banners {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @OneToMany((type) => Hotel, (hotel) => hotel.banner)
  hotel!: Hotel;

  @CreateDateColumn({ select: false })
  created_at!: Date;

  @UpdateDateColumn({ select: false })
  updated_at!: Date;
}
