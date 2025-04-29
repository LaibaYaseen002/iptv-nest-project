import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto/user.dto';
import { generateToken } from '../utils/generateToken';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<string> {
    const user = await this.userModel.create(createUserDto);

    const token = generateToken({
      _id: user._id,
      email: user.email,
    });

    return token;
  }
  async login(loginUserDto: LoginUserDto): Promise<string> {
    const { email, password } = loginUserDto;

    const user = await this.userModel.findOne({ email }).select('+password');
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== password) {
      throw new NotFoundException('Invalid credentials');
    }

    const token = generateToken({
      _id: user._id,
      email: user.email,
    });

    return token;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }
    return updatedUser;
  }

  async delete(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
    return deletedUser;
  }
}
