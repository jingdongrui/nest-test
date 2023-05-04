import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.interface';
import { CreateUserDTO, EditUserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel('users') private readonly userModel: Model<User>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getWeather(): Promise<any> {
    // https://api.map.baidu.com/weather/v1/?district_id=222405&data_type=all&ak=ohACWvScZZWwiPv32iIkGskMZW23cko6  //GET请求
    const res = this.httpService.get(
      'https://api.map.baidu.com/weather/v1/?district_id=222405&data_type=all&ak=ohACWvScZZWwiPv32iIkGskMZW23cko6',
    );
    const checkResult = await lastValueFrom(res);
    console.log(checkResult.data);
    return 2;
  }

  // 查找所有用户
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
  // 查找单个用户
  async findOne(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  // 用户登录
  async login() {
    // const userInfo = await this.userModel.
    const users = await this.userModel.find({ username: 'test' });
    return users;
  }
}
