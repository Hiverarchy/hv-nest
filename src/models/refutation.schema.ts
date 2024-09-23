import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Refutation extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  postId: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  authorId: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const RefutationSchema = SchemaFactory.createForClass(Refutation);