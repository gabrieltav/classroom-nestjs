import { IsBoolean, IsInt, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class CreateClassDto {
  @IsNumber()
  @IsInt()
  @IsPositive()
  room_number: number;

  @IsNumber()
  @IsInt()
  @IsPositive()
  capacity: number;

  @IsBoolean()
  @IsOptional()
  availability: boolean;
}
