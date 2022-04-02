import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async create( createTeacherDto: CreateTeacherDto) {
    const {} = createTeacherDto;
    const teacher = await this.teacherRepository.create(createTeacherDto);

    return teacher.save();
  }

  async findAll() {
    return await this.teacherRepository.find();
  }

  async findOne(id: string) {
    const teacher = await this.teacherRepository.findOne({ where: { id } });
    if (!teacher) {
      throw new NotFoundException(`Teacher ID ${id} not found`);
    }
    return teacher;
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    const teacher = await this.teacherRepository.findOne({ where: { id } });
    if (!teacher) {
      throw new NotFoundException(`Teacher ID ${id} not found`);
    }
    await this.teacherRepository.update({ id }, updateTeacherDto);
    return await this.teacherRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    const teacher = await this.teacherRepository.findOne({ where: { id } });
    if (!teacher) {
      throw new NotFoundException(`teacher ID ${id} not found`);
    }
    await this.teacherRepository.delete(id);
    return `Teacher ID ${id} successfully deleted`;
  }
}
