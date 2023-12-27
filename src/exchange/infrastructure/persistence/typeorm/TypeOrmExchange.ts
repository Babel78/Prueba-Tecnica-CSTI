import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('exchange')
export class TypeOrmExchange extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  money_from: string;

  @Column()
  money_to: string;

  @Column('decimal', { precision: 5, scale: 2 })
  type_exchange: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
