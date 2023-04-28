import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

import { User } from './user.interface';

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('/ssk/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/weather')
  getHello(): any {
    // return this.userService.getWeather();
    return '978afds';
  }

  // GET /user/users
  @Get('getUser')
  async findAll(): Promise<UserResponse<User[]>> {
    return {
      code: 200,
      data: await this.userService.findAll(),
      message: 'Success.',
    };
  }

  // GET /user/users
  @Post('login')
  async login(): Promise<UserResponse<User[]>> {
    return {
      code: 2000,
      data: await this.userService.login(),
      message: '登录成功',
    };
  }
}
