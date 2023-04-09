import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item, ItemDocument } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item.name)
    private ItemModel: Model<ItemDocument>,
  ) {}
  async create(createItemDto: CreateItemDto) {
    const createdItem = new this.ItemModel(createItemDto);
    return await createdItem.save();
  }

  async findAll() {
    return await this.ItemModel.find().exec();
  }

  async findOne(id: number) {
    return await this.ItemModel.findById(id);
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    //update an item by id
    return await this.ItemModel.updateOne({ id }, updateItemDto);
  }

  async remove(id: number) {
    return await this.ItemModel.findByIdAndRemove(id);
  }
}
