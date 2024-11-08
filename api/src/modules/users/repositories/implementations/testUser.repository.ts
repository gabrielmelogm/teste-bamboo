import { randomUUID } from 'crypto';

import { CreateUserDto } from '../../dto/createUser.dto';
import { User } from '../../entities/user.entity';
import { usersRepository } from '../users.repository';

export class TestUserRepository implements usersRepository {
  users: User[] = [
    {
      id: randomUUID(),
      username: 'test',
      email: 'test@email.com.br',
      password: '12345678',
      createdAt: new Date().toISOString(),
    },
  ];

  async getByUsername(username: string): Promise<User> {
    const user = this.users.find((user) => {
      if (user.username === username) return user;
    });

    return user;
  }
  async create(user: CreateUserDto): Promise<User> {
    this.users.push({
      id: randomUUID(),
      username: user.username,
      email: user.email,
      password: user.password,
      createdAt: `${new Date().toISOString()}`,
    });
    return null;
  }
}
