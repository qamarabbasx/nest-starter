import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn({
    name: 'user_id',
  })
  id: number;

  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @ApiProperty()
  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}
