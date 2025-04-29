import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';
import { CreateUserDto } from './dto/user.dto';
import { generateToken } from '../utils/generateToken'; // Import function here

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<string> {
    const user = await this.userModel.create(createUserDto);

    const token = generateToken({
      // Use the function here
      _id: user._id,
      email: user.email,
    });

    return token;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
