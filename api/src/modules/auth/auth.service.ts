import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User) {
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username, password) {
    let user;

    try {
      user = await this.userService.getByUsername(username);
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }
}
