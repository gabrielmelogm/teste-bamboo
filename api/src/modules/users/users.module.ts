import { Module } from '@nestjs/common';
import { PrismaService } from '../../lib/prisma.service';
import { PrismaUserRepository } from './repositories/implementations/prismaUser.repository';
import { usersRepository } from './repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: usersRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
