import { Item } from 'src/item/entities/item.entity';

export class User {
  name: string;
  email: string;
  mdp: string;
  photo: string;
  items: Item[];
}
