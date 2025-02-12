import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Writer } from 'schemas/writers.schema';

@Injectable()
export class WritersService {
  constructor(@InjectModel(Writer.name) private writerModel: Model<Writer>) {}

  async create(writer: Writer): Promise<Writer> {
    const createdWriter = new this.writerModel(writer);
    return createdWriter.save();
  }

  async findAll(): Promise<Writer[]> {
    return this.writerModel.find().exec();
  }

  // Used for seeding purposes.
  async count(): Promise<number> {
    return this.writerModel.countDocuments().exec();
  }
}
