import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

import { User } from './user.interface';
import { Request } from 'express';

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('/ssk/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/test')
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
  async login(@Req() req: Request): Promise<any> {
    console.log('qqqqqqqqqqqqqqqqqqq', req.body);
    return {
      code: 2000,
      data: await this.userService.login(),
      message: '登录成功',
    };
  }
}
