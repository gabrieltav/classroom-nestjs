import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsString()
  @MaxLength(6)
  @MinLength(6)
  matriculation: string;

  @IsString()
  @IsEmail()
  @MaxLength(120)
  email: string;

  @Type(() => Date)
  @IsDate()
  birthDate: Date;
}
