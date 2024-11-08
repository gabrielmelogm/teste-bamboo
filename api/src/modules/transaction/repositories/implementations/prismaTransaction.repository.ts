import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../lib/prisma.service';
import { CreateTransactionDto } from '../../dto/create-transaction.dto';
import { Transaction } from '../../entities/transaction.entity';
import { transactionRepository } from '../transaction.repository';

@Injectable()
export class PrismaTransactionRepository implements transactionRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: string): Promise<Transaction[] | any> {
    return await this.prisma.transactions.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async create(transaction: CreateTransactionDto): Promise<Transaction | any> {
    return await this.prisma.transactions.create({
      data: {
        title: transaction.title,
        category: transaction.category,
        type: transaction.type,
        amount: transaction.amount,
        createAt: transaction.createdAt,
        userId: transaction.userId,
      },
    });
  }

  async destroy(id: string): Promise<void> {
    await this.prisma.transactions.delete({
      where: {
        id,
      },
    });
  }
}
