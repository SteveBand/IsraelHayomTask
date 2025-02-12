import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from 'schemas/posts.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(post: Post): Promise<Post> {
    const createdPost = new this.postModel(post);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel
      .aggregate([
        { $sort: { createdAt: -1 } },
        {
          $group: {
            _id: '$writer',
            latestPost: { $first: '$$ROOT' },
          },
        },
        { $replaceRoot: { newRoot: '$latestPost' } },
        {
          $lookup: {
            from: 'writers',
            localField: 'writer',
            foreignField: '_id',
            as: 'writer',
          },
        },
        { $unwind: '$writer' },
      ])
      .sort({ createdAt: -1 })
      .exec();
  }

  // Used for seeding purposes.
  async count(): Promise<number> {
    return this.postModel.countDocuments().exec();
  }
}
