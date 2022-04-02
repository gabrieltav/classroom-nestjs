import { Student } from 'src/modules/students/entities/student.entity';
import { Teacher } from 'src/modules/teacher/entities/teacher.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'classes',
})
export class Classe extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  room_number: number;

  @Column()
  capacity: number;

  @Column()
  availability: boolean;

  @ManyToOne(() => Teacher, (teacher) => teacher.classe, {eager: true})
  teacher: Teacher;

  @ManyToMany(() => Student, {eager:true})
  @JoinTable()
  students: Student[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_At' })
  updateAt: Date;
}
