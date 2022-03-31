import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  async create( createStudentDto: CreateStudentDto) {
    const {} = createStudentDto;
    const student = await this.studentsRepository.create(createStudentDto);

    return student.save();
  }

  async findAll() {
    return await this.studentsRepository.find();
  }

  async findOne(id: string) {
    const student = await this.studentsRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student ID ${id} not found`);
    }
    return student;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentsRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student ID ${id} not found`);
    }
    await this.studentsRepository.update({ id }, updateStudentDto);
    return student;
  }

  async remove(id: string) {
    const student = await this.studentsRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student ID ${id} not found`);
    }
    await this.studentsRepository.delete(id);
    return `Student ID ${id} successfully deleted`;
  }
}
