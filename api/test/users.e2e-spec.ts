import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { UsersService } from '../src/modules/users/users.service';
import { UsersController } from '../src/modules/users/users.controller';
import { usersRepository } from '../src/modules/users/repositories/users.repository';
import { TestUserRepository } from '../src/modules/users/repositories/implementations/testUser.repository';

import * as request from 'supertest';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: usersRepository,
          useClass: TestUserRepository,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (POST)', async () =>
    await request(app.getHttpServer())
      .post('/users')
      .send({
        username: 'user-test',
        email: 'test@gmail.com',
        password: '12345678',
      })
      .expect(201));

  it('/users (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/users/test')
      .expect(200);

    expect(response.body).toHaveProperty('id');
  });
});
