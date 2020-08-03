import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Banners from './Banners';

@Entity()
export default class Hotel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne((type) => Banners, (banner) => banner.hotel)
  banner!: [Banners];

  @Column()
  description!: string;

  @Column()
  city!: string;

  @Column()
  country!: string;

  @Column()
  address!: string;

  @Column()
  location!: string;

  @Column()
  rooms!: number;

  @Column()
  guests!: number;

  @CreateDateColumn({ select: false })
  created_at!: Date;

  @UpdateDateColumn({ select: false })
  updated_at!: Date;
}
