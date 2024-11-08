import { CreateUserDto } from '../dto/createUser.dto';
import { User } from '../entities/user.entity';

export abstract class usersRepository {
  abstract getByUsername(username: string): Promise<User>;

  abstract create(user: CreateUserDto): Promise<Omit<User, 'password'>>;
}
