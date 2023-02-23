import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/auth.schema';
import { AuthUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  googleLogin(req: { user: any }) {
    console.log('user from back: ', req.user);
    return req.user;
  }

  async create(createUserDto: AuthUserDto): Promise<User> {
    return await new this.model({
      ...createUserDto,
      createdAt: new Date(),
    }).save();
  }

  async checkAlreadyCreated(userId: string): Promise<any> {
    const obtainedUser = await this.model.find({}, { userId: userId }).exec();
    return obtainedUser.length ? true : false;
  }
}
