import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Hotel from './Hotel';

@Entity()
export default class Banners {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @OneToMany((type) => Hotel, (hotel) => hotel.banner)
  hotel!: Hotel;
}
