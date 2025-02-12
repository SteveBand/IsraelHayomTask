import { HydratedDocument } from 'mongoose';
export type WriterDocument = HydratedDocument<Writer>;
export declare class Writer {
    _id: string;
    name: string;
    imageUrl: string;
    pageUrl: string;
}
export declare const WriterSchema: import("mongoose").Schema<Writer, import("mongoose").Model<Writer, any, any, any, import("mongoose").Document<unknown, any, Writer> & Writer & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Writer, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Writer>> & import("mongoose").FlatRecord<Writer> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
