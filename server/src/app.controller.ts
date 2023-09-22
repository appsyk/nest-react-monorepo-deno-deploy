import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): { status: number; data: string } {
    return {
      status: 200,
      data: this.appService.getHello(),
    };
  }
}
