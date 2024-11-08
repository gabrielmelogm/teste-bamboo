import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { usersRepository } from './repositories/users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private userRepository: usersRepository) {}

  async getByUsername(username: string) {
    const user = await this.userRepository.getByUsername(username);
    if (!user) return null;

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
    };
  }

  async createUser(createUserDto: CreateUserDto) {
    const hash = await bcrypt.hash(createUserDto.password, 10);

    return await this.userRepository.create({
      username: createUserDto.username,
      email: createUserDto.email,
      password: hash,
    });
  }
}
