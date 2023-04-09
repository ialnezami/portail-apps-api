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
  password: string;
  @Prop({ required: true })
  photo: string;
  @Prop({ required: true })
  items: Item[];
  @Prop({ required: true })
  profile: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;

// example of a user
/*
{
  "name": "test",
  "email": "
  "mdp": "test",
  "photo": "https://staticns.ankama.com/dofus/www/game/items/200/200.png",
  "items": [
    {
      "name": "Potion de soin",
      "description": "Une potion de soin",
      "id": "potion-de-soin",
      "link": "https://www.dofus.com/fr/mmorpg/encyclopedie/equipements/potion-de-soin",
        "icone": "https://staticns.ankama.com/dofus/www/game/items/200/200.png",
      "weight": 1
    }
  ],
  "profile": "admin"
}
*/
