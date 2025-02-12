import { Model } from 'mongoose';
import { Writer } from 'schemas/writers.schema';
export declare class WritersService {
    private writerModel;
    constructor(writerModel: Model<Writer>);
    create(writer: Writer): Promise<Writer>;
    findAll(): Promise<Writer[]>;
    count(): Promise<number>;
}
