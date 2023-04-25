import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

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
}
