import { CustomBaseEntity } from 'config/base_entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends CustomBaseEntity {
  @Column({ unique: true })
  username: string;

  @Column()
  fullName: string;

  @Column()
  password: string;
}
