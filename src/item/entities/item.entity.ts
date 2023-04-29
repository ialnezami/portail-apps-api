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
  @Prop({ required: true, default: false })
  public: boolean;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
export type ItemDocument = Item & Document;

/**
 * example of item
 {
  "name": "Potion de soin",
  "description": "Une potion de soin",
  "id": "potion-de-soin",
  "link": "https://www.dofus.com/fr/mmorpg/encyclopedie/equipements/potion-de-soin",
  "icone": "https://staticns.ankama.com/dofus/www/game/items/200/200.png",
  "weight": 1
}
  
 */
