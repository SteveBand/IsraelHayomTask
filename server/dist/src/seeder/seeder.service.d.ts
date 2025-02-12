import { WritersService } from 'src/writers/writers.service';
import { PostsService } from 'src/posts/posts.service';
export declare class SeedService {
    private readonly writersService;
    private readonly postsService;
    constructor(writersService: WritersService, postsService: PostsService);
    seedData(): Promise<void>;
}
