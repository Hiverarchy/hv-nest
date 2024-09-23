import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserInfo, UserInfoSchema } from './user-info.schema';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  uid: string;

  @Prop({ type: UserInfoSchema, required: true })
  userInfo: UserInfo;
}

export const UserSchema = SchemaFactory.createForClass(User);