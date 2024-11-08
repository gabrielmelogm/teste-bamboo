import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../lib/prisma.service';
import { CreateUserDto } from '../../dto/createUser.dto';
import { User } from '../../entities/user.entity';
import { usersRepository } from '../users.repository';

@Injectable()
export class PrismaUserRepository implements usersRepository {
	constructor(private prisma: PrismaService) { }

	async getByUsername(username: string): Promise<User | any> {
		return await this.prisma.users.findUnique({
			where: {
				username,
			},
		});
	}

	async create(user: CreateUserDto): Promise<Omit<User, 'password'>> {
		const response = await this.prisma.users.create({
			data: {
				username: user.username,
				email: user.email,
				password: user.password,
			},
		});
		const newUser: Omit<User, 'password'> = {
			id: response.id,
			username: response.username,
			email: response.email,
			createdAt: `${response.createdAt.toISOString()}`,
		};
		return newUser;
	}
}
