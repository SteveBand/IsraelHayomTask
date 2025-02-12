import { Controller, Get } from '@nestjs/common';
import { Post } from 'schemas/posts.schema';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<Post[]> {
    const postsList = await this.postsService.findAll();
    return postsList;
  }
}
