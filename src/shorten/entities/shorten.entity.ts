import { CustomBaseEntity } from 'config/base_entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Shorten extends CustomBaseEntity {
  @Column()
  user: string;

  @Column()
  shortened:string;

  @Column()
  url: string;
}
