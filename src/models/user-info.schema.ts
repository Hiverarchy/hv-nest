import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PostNavItem, PostNavItemSchema } from './post-nav-item.schema';

@Schema()
export class UserInfo extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  displayName: string;

  @Prop()
  photoURL: string;

  @Prop()
  phoneNumber: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ required: true })
  mainPageId: string;

  @Prop({ type: [PostNavItemSchema], default: [] })
  posts: PostNavItem[];

  @Prop()
  headerHTML: string;

  @Prop()
  footerHTML: string;
}

export const UserInfoSchema = SchemaFactory.createForClass(UserInfo);