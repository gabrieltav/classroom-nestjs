import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Classe } from '../entities/class.entity';
import { IClassRepository } from '../interfaces/IClassRepository';


@EntityRepository(Classe)
export class ClassRepository extends Repository<Classe> implements IClassRepository {

}
