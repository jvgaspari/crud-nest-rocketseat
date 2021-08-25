import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  batch: number;

  @Prop()
  provider: string;

  @Prop()
  value: number;

  @Prop()
  quantity: number;


}

export const UserSchema = SchemaFactory.createForClass(User);