import { Injectable } from '@nestjs/common';
import { WritersService } from 'src/writers/writers.service';
import writersJson from './writers.json';
import postsJson from './posts.json';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly writersService: WritersService,
    private readonly postsService: PostsService,
  ) {}

  async seedData() {
    const writersCount = await this.writersService.count();
    const postsCount = await this.postsService.count();
    try {
      if (writersCount == 0) {
        writersJson.forEach((element) => {
          this.writersService.create(element);
        });
      } else {
        console.log('No need for writers seed.');
      }

      if (postsCount == 0) {
        postsJson.forEach((element) => {
          const elementObj = {
            ...element,
            createdAt: new Date(element.createdAt),
          };
          this.postsService.create(elementObj);
        });
      } else {
        console.log('No need for posts seed.');
      }
    } catch (error) {
      console.log(
        `An error has Occured while seeding data to the Data Base, please check seeder.service.ts file.\n Error:\n ${error}`,
      );
    }
  }
}
