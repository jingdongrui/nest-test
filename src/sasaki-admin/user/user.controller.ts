import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/ssk/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/weather')
  getHello(): any {
    return this.userService.getWeather();
  }
}
