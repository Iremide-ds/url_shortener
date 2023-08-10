import { Injectable } from '@nestjs/common';
import { CreateShortenDto } from './dto/create-shorten.dto';
import { Shorten } from './entities/shorten.entity';

@Injectable()
export class ShortenService {
  getHello(): string {
    return 'Hello World from Shorten service!';
  }

  async create(
    createShortenDto: CreateShortenDto,
    userId: string,
    host: string, 
  ) {
    try {
      const nanoid = crypto.randomUUID();
      const shortUrl = Shorten.create({
        ...createShortenDto,
        shortened: nanoid,
        user: userId,
      });
      await shortUrl.save();

      return `${host}/i/${shortUrl.shortened}`;
    } catch (error) {
      console.error(error);
      return 'Error creating url';
    }
  }

  async findAll(userId: string): Promise<Shorten[]> {
    return await Shorten.find({ where: { user: userId } });
  }

  async findOne(id: string): Promise<Shorten> {
    return await Shorten.findOneOrFail({ where: { shortened: id } });
  }
}
