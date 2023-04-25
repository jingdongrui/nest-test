import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/ssk/user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('/weatther')
  getHello(): string {
    return this.appService.getHello();
  }
}
