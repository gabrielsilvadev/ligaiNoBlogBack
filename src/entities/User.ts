import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';


@Entity('user')
export default class User {

  @PrimaryGeneratedColumn("uuid", { name: 'id_user' })

  id: string;

  @Column()

  first_name: string;

  @Column()

  last_name: string;
  @Column({ unique: true })

  email: string;

  @Column()

  password: string;

  @Column()

  telephone: string;

  @Column({ nullable: true, name: 'password_reset_token' })
  passwordResetToken: string;

  @Column({ nullable: true, name: 'password_reset_expire' })
  passwordResetExpire: Date;

  @Column({ unique: true })
  cpf: string

}
