import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PostNavItem extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ type: [PostNavItem], default: [] })
  children: PostNavItem[];
}

export const PostNavItemSchema = SchemaFactory.createForClass(PostNavItem);