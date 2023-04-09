import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: false })
  id: string;
  @Prop({ required: true })
  link: string;
  @Prop({ required: true })
  icone: string;
  @Prop({ required: false, default: 0 })
  weight: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
export type ItemDocument = Item & Document;
