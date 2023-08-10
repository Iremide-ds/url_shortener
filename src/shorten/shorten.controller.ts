import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { CreateShortenDto } from './dto/create-shorten.dto';
import { ShortenService } from './shorten.service';
import { JwtAuthGuard } from 'src/jwt_auth.guard';
import { Public } from 'src/public.guard';

@Controller('shorten')
export class ShortenController {
  constructor(private readonly shortenService: ShortenService) {}

  @Public()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createShortenDto: CreateShortenDto,
    @Request() req,
    @Headers() headers,
  ) {
    console.log(headers);
    return this.shortenService.create(createShortenDto, req.user.userId, `${req.protocol}://${headers.host}`);
  }
}
