import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { CORS_ORIGIN } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors({origin: CORS_ORIGIN });
  await app.listen(3000);
}
bootstrap();
