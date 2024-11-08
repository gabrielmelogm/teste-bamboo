import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  type: string;

  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsDateString()
  createdAt: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
