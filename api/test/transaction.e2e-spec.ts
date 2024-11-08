import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TransactionsController } from '../src/modules/transaction/transaction.controller';
import { TransactionsService } from '../src/modules/transaction/transaction.service';
import { transactionRepository } from '../src/modules/transaction/repositories/transaction.repository';
import { TestTransactionRepository } from '../src/modules/transaction/repositories/implementations/testTransaction.repository';
import { randomUUID } from 'crypto';

describe('TransactionController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [
        TransactionsService,
        {
          provide: transactionRepository,
          useClass: TestTransactionRepository,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  let data = {
    title: 'Teste',
    category: 'Teste',
    type: 'deposit',
    amount: 0.01,
    createdAt: new Date(),
  };

  it('/transactions (GET)', async () =>
    await request(app.getHttpServer()).get('/transactions').expect(200));

  it('/transactions (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/transactions')
      .send(data);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');

    data = response.body;
  });

  it('/transactions (DELETE)', async () => {
    const response = await request(app.getHttpServer())
      .delete(`/transactions/${randomUUID()}`)
      .send(data);

    expect(response.statusCode).toBe(200);
  });
});
