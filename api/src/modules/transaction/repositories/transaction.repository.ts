import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Transaction } from '../entities/transaction.entity';

export abstract class transactionRepository {
  abstract getAll(userId: string): Promise<Transaction[]>;

  abstract create(transaction: CreateTransactionDto): Promise<Transaction>;

  abstract destroy(id: string): Promise<void>;
}
