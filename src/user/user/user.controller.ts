import {
  Controller,
  Get,
  Header,
  HttpCode,
  type HttpRedirectResponse,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';

@Controller('/api/user')
export class UserController {
  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse() {
    return {
      data: 'Sample Response',
    };
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/user/sample-response',
      statusCode: 301,
    };
  }

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
