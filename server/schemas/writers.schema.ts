import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WriterDocument = HydratedDocument<Writer>;

@Schema()
export class Writer {
  @Prop({ required: true, type: String })
  _id: string;

  @Prop({ required: true, maxlength: 40, minlength: 2 })
  name: string;

  @Prop()
  imageUrl: string;

  @Prop()
  pageUrl: string;
}

export const WriterSchema = SchemaFactory.createForClass(Writer);
