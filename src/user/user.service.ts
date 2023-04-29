import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { FilterQuery, Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async login(loginUserDto: LoginDto) {
    // search for user in database
    const user = await this.userModel.findOne({
      email: loginUserDto.email,
    });
    // if user is not found, return null
    if (!user) {
      throw new Error('User not found');
    }
    // if user is found, compare password
    const isMatch = loginUserDto.password === user.password;
    // if password is not a match, return null
    if (!isMatch) {
      throw new Error('Password is not a match');
    }
    // if password is a match, return user
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userModel.findOneAndRemove({ id });
  }
}
