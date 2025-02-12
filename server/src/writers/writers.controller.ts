import { Controller, Get } from '@nestjs/common';
import { WritersService } from './writers.service';
import { Writer } from 'schemas/writers.schema';

@Controller()
export class WritersController {
  constructor(private readonly writersService: WritersService) {}

  @Get('writers')
  async getWriters(): Promise<Writer[]> {
    const writersList = await this.writersService.findAll();
    return writersList;
  }
}
