import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
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
  rooms!: number;

  @Column()
  guests!: number;
}
