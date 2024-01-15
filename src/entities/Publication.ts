import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('company')
export default class Company {

  @PrimaryGeneratedColumn("uuid", { name: 'publication_id' })

  id: string;

  @Column()

  name: string;

  @Column()

  description: string;

  @CreateDateColumn()
  date: string;

  @Column()

  body: string;
}
