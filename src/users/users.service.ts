import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World from Users service!';
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = User.create({ ...createUserDto });
      await user.save();

      return user;
    } catch (error) {
      return null;
    }
  }

  async getUser(username: string): Promise<User> {
    return User.findOneOrFail({ where: { username: username } });
  }
}
