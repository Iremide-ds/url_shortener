import { Module } from '@nestjs/common';
import { ShortenService } from './shorten.service';
import { ShortenController } from './shorten.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shorten } from './entities/shorten.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shorten])],
  controllers: [ShortenController],
  providers: [ShortenService],
  exports: [ShortenService],
})
export class ShortenModule {}
