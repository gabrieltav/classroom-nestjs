import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'teachers',
})
export class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column()
  matriculation: string;

  @Column({ length: 255 })
  email: string;

  @Column('text')
  birthDate: Date;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @CreateDateColumn({ name: 'update_At' })
  updateAt: Date;
}
