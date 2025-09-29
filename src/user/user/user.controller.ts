import { Controller, Get, Post } from '@nestjs/common';

@Controller('/api/user')
export class UserController {
  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'GET';
  }
}
