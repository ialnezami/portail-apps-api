import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Category {
  @Prop({ required: true })
  id: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  wight: number;
  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  })
  items: string[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
export type CategoryDocument = Category & Document;
