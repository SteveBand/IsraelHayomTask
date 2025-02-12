import { HydratedDocument, Schema as mongoSchema } from 'mongoose';
export type PostsDocument = HydratedDocument<Post>;
export declare class Post {
    title: string;
    createdAt: Date;
    postUrl: string;
    writer: string;
}
export declare const PostSchema: mongoSchema<Post, import("mongoose").Model<Post, any, any, any, import("mongoose").Document<unknown, any, Post> & Post & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Post, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Post>> & import("mongoose").FlatRecord<Post> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
