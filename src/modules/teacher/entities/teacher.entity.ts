import { Classe } from 'src/modules/class/entities/class.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @OneToMany(() => Classe, (classe) => classe.teacher)
  classe: Classe[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_At' })
  updateAt: Date;
}
