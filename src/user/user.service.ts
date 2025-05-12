import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.model';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto/user.dto';
import { generateToken } from '../utils/generateToken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<string> {
  try {
    const user = this.userRepo.create(createUserDto);
    await this.userRepo.save(user);
    return generateToken({ id: user.id, email: user.email });
  } catch (error) {
    if (error.code === '23505') { 
      throw new ConflictException('Email already exists');
    }
    throw new InternalServerErrorException();
  }
}

  async login(loginUserDto: LoginUserDto): Promise<string> {
    const { email, password } = loginUserDto;

    const user = await this.userRepo
      .createQueryBuilder('user')
      .addSelect('user.password') 
      .where('user.email = :email', { email })
      .getOne();

    if (!user || user.password !== password) {
      throw new NotFoundException('Invalid credentials');
    }

    return generateToken({ id: user.id, email: user.email });
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepo
      .createQueryBuilder()
      .update(User)
      .set(updateUserDto)
      .where('id = :id', { id })
      .execute();

    const updatedUser = await this.userRepo.findOne({ where: { id } });
    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser;
  }

  async delete(id: number): Promise<void> {
    const result = await this.userRepo
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();

    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }
  }
}
