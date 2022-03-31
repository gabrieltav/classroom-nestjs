
import { Repository } from 'typeorm';
import { Classe } from '../entities/class.entity';


export interface IClassRepository extends Repository<Classe> {
    
}
