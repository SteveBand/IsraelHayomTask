import { Model } from 'mongoose';
import { Post } from 'schemas/posts.schema';
export declare class PostsService {
    private postModel;
    constructor(postModel: Model<Post>);
    create(post: Post): Promise<Post>;
    findAll(): Promise<Post[]>;
    count(): Promise<number>;
}
