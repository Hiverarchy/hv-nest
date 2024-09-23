import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Thought extends Document {
  @Prop({ required: true })
  id: string;

  @Prop()
  parentId: string | null;

  @Prop({ required: true })
  arcId: string;

  @Prop({ type: [String], default: [] })
  childArcs: string[];

  @Prop({ required: true })
  authorId: string;

  @Prop({ required: true })
  fileName: string;

  @Prop({ required: true })
  folderName: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  content: string; // HTML or markdown

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const ThoughtSchema = SchemaFactory.createForClass(Thought);