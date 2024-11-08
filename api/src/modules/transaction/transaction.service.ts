import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { transactionRepository } from './repositories/transaction.repository';

@Injectable()
export class TransactionsService {
  constructor(private transactionRepository: transactionRepository) {}

  async getTransactions(userId: string) {
    return await this.transactionRepository.getAll(userId);
  }

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    return await this.transactionRepository.create(createTransactionDto);
  }

  async deleteTransaction(id: string) {
    return await this.transactionRepository.destroy(id);
  }
}
