import { Module } from '@nestjs/common';
import { SeedService } from './seeder.service';
import { WriterModule } from 'src/writers/writers.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [WriterModule, PostsModule],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
