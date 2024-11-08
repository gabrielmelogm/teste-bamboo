import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../lib/prisma.service';
import { PrismaUserRepository } from './repositories/implementations/prismaUser.repository';
import { usersRepository } from './repositories/users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        PrismaService,
        {
          provide: usersRepository,
          useClass: PrismaUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
