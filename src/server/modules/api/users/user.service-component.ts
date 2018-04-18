import { Component } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { userSchema } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Component()
export class UserServiceComponent {

  constructor(@InjectModel(userSchema) private readonly userModel: Model<User>) { }
  private readonly user: User[] = [];

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async deleteOne(id): Promise<User[]> {
    return await this.userModel.deleteOne({_id: id}).exec();
  }

  async upDateOne(id, item): Promise<User[]> {
    return await this.userModel.updateOne({_id: id}, {$set: item}).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id): Promise<User[]> {
    return await this.userModel.findOne({_id: id}).exec();
  }
}
