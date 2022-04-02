import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { table } from 'console';
import { Repository } from 'typeorm';
import { CreateStudentDto } from '../students/dto/create-student.dto';
import { Student } from '../students/entities/student.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Classe } from './entities/class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Classe)
    private classeRepository: Repository<Classe>,
    
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,

    @InjectRepository(Teacher)
    private studentRepository: Repository<Student>,
  ) {}

  async create(createClassDto: CreateClassDto) {
    const {} = createClassDto;
    const classe = await this.classeRepository.create(createClassDto);

    return classe.save();
  }

  async findAll() {
    return await this.classeRepository.find();
  }

  async findOne(id: string) {
    const classe = await this.classeRepository.findOne({ where: { id } });
    if (!classe) {
      throw new NotFoundException(`Class ID ${id} not found`);
    }
    return classe;
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    const classe = await this.classeRepository.findOne({ where: { id } });
    if (!classe) {
      throw new NotFoundException(`Classe ID ${id} not found`);
    }
    await this.classeRepository.update({ id }, updateClassDto);
    return await this.classeRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    const classe = await this.classeRepository.findOne({ where: { id } });
    if (!classe) {
      throw new NotFoundException(`Classe ID ${id} not found`);
    }
    await this.classeRepository.delete(id);
    return `Classe ID ${id} successfully deleted`;
  }
}
