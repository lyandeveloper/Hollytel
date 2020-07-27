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

  @Column({ nullable: true })
  avatar!: string;

  @Column()
  born!: string;

  @Column()
  city!: string;

  @Column()
  address!: string;

  @Column()
  phone!: string;

  @Column()
  country!: string;
}
