import { WritersService } from './writers.service';
import { Writer } from 'schemas/writers.schema';
export declare class WritersController {
    private readonly writersService;
    constructor(writersService: WritersService);
    getWriters(): Promise<Writer[]>;
}
