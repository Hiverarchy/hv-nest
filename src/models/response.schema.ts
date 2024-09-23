import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Response extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  refutationId: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  authorId: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const ResponseSchema = SchemaFactory.createForClass(Response);