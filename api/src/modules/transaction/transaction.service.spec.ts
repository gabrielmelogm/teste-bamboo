import { PrismaService } from '../../lib/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transaction.service';
import { transactionRepository } from './repositories/transaction.repository';
import { PrismaTransactionRepository } from './repositories/implementations/prismaTransaction.repository';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionsService,
        PrismaService,
        {
          provide: transactionRepository,
          useClass: PrismaTransactionRepository,
        },
      ],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
