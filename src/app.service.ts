import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { ShortenService } from './shorten/shorten.service';
import { Shorten } from './shorten/entities/shorten.entity';

@Injectable()
export class AppService {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private readonly shortenService: ShortenService,
  ) {}

  getHello(): string[] {
    return [
      'Api is running...',
      this.authService.getHello(),
      this.userService.getHello(),
      this.shortenService.getHello(),
    ];
  }

  async findOne(id: string): Promise<string> {
    const url = await this.shortenService.findOne(id);
    return url.url;
  }
}
