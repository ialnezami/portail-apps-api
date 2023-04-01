import { Item } from 'src/item/entities/item.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  mdp: string;
  @Prop({ required: true })
  photo: string;
  @Prop({ required: true })
  items: Item[];
  @Prop({ required: true })
  profile: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
