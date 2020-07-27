import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  avatar!: string;

  @Column()
  born!: string;

  @Column()
  address!: string;

  @Column()
  phone!: string;

  @Column()
  country!: string;
}
