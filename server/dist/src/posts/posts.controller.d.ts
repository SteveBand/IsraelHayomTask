import { Post } from 'schemas/posts.schema';
import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    findAll(): Promise<Post[]>;
}
