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
    return this.categoryModel.find().exec();
  }

  async findOne(id: string) {
    return await this.categoryModel.findById(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.updateOne({ id: id }, updateCategoryDto);
  }

  async remove(id: string) {
    return await this.categoryModel.findByIdAndRemove(id);
  }
}
