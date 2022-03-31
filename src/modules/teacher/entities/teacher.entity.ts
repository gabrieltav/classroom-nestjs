
import {
    BaseEntity,
    Column,
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
  
    @Column({ type: 'varchar', length: 20, nullable: false })
    room_number: string;
   
//   Coloca os atributos aqui

  }
  