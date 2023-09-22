import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('GET Hello');
    return 'This text is from Backend server';
  }
}
