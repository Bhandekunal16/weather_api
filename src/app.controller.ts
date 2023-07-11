import { Controller, Get, Query,  } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getWeather(@Query() query: {latitude: any, longitude: any}): Promise<any> {
    // Call the weather service
    return this.appService.getWeather(query.latitude, query.longitude);
  }
}
