import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from 'src/public.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string[] {
    return this.appService.getHello();
  }

  @Public()
  @Get('/i/:id')
  @Redirect()
  async findOne(@Param('id') id: string) {
    return {url: await this.appService.findOne(id)};
  }
}
