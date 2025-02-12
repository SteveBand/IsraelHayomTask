import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as mongoSchema } from 'mongoose';

export type PostsDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  createdAt: Date;

  @Prop()
  postUrl: string;

  @Prop({ type: String, ref: 'Writer' })
  writer: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
