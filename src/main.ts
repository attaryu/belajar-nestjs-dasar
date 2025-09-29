import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import mustache from 'mustache-express';

import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParser('secret'));

  app.set('views', __dirname + '/../views');
  app.set('view engine', 'html');
  app.engine('html', mustache());

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
