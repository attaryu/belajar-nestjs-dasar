import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('/api/user')
export class UserController {
  @Get('/hello')
  sayHello(
    @Query('first_name') first_name: string,
    @Query('last_name') last_name: string,
  ): string {
    return `Hello ${first_name} ${last_name}`;
  }

  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `GET ${id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'GET';
  }
}
