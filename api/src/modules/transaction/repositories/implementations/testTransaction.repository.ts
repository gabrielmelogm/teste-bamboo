import { CreateTransactionDto } from '../../dto/create-transaction.dto';
import { Transaction } from '../../entities/transaction.entity';
import { transactionRepository } from '../transaction.repository';
import { randomUUID } from 'node:crypto';

export class TestTransactionRepository extends transactionRepository {
  data: Transaction[] = [
    {
      id: randomUUID(),
      title: 'Teste',
      category: 'Teste',
      type: 'deposit',
      amount: 0.01,
      createdAt: new Date().toISOString(),
      userId: randomUUID(),
    },
  ];

  async getAll(userId: string): Promise<Transaction[]> {
    return this.data;
  }
  async create(transaction: CreateTransactionDto): Promise<Transaction | null> {
    const item = {
      id: randomUUID(),
      title: transaction.title,
      category: transaction.category,
      type: transaction.type,
      amount: transaction.amount,
      createdAt: transaction.createdAt,
      userId: randomUUID(),
    };

    this.data.push(item);
    return item;
  }
  async destroy(id: string): Promise<void> {
    this.data.shift();
  }
}
