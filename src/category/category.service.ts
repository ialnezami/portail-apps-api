import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './entities/category.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<CategoryDocument>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const createdCat = new this.categoryModel(createCategoryDto);
    return createdCat.save();
  }

  async findAll() {
    const response = await this.categoryModel.find().populate({
      path: 'items',
      populate: { path: 'category', model: 'Category' },
    });
    return response;
  }

  async findOne(id: string) {
    return await this.categoryModel.findById(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryModel.findByIdAndUpdate(
      id,
      { $set: updateCategoryDto },
      { new: true },
    );
    return category;
  }

  async addItem(id: string, itemId: string) {
    return await this.categoryModel.updateOne(
      { _id: id },
      { $push: { items: itemId } },
    );
  }

  async remove(id: string) {
    return await this.categoryModel.findByIdAndRemove(id);
  }
}
