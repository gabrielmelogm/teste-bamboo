import { Module } from '@nestjs/common';
import { PrismaService } from '../../lib/prisma.service';
import { PrismaTransactionRepository } from './repositories/implementations/prismaTransaction.repository';
import { transactionRepository } from './repositories/transaction.repository';
import { TransactionsController } from './transaction.controller';
import { TransactionsService } from './transaction.service';

@Module({
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    PrismaService,
    {
      provide: transactionRepository,
      useClass: PrismaTransactionRepository,
    },
  ],
})
export class TransactionsModule {}
