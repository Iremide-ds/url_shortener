import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  getHello(): string {
    return 'Hello World from Auth service!';
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(username);
    if (!user) return null;
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.usersService.getUser(username);
    const payload = { username: username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  logout() {
    return `This action returns all auth`;
  }

  async register(newUser: CreateUserDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(newUser.password, saltOrRounds);
    newUser.password = hashedPassword;
    const result = await this.usersService.create(newUser);
    return {
      access_token: this.jwtService.sign({
        username: result.username,
        sub: result.id,
      }),
    };
  }
}
