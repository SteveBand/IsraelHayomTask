import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WritersService } from './writers.service';
import { Writer, WriterSchema } from 'schemas/writers.schema';
import { WritersController } from './writers.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Writer.name, schema: WriterSchema }]),
  ],
  controllers: [WritersController],
  providers: [WritersService],
  exports: [WritersService],
})
export class WriterModule {}
