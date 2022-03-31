import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const configService: ConfigService = app.get(ConfigService);
  app.setGlobalPrefix('/api');
  await app.listen(configService.get('server.port'));

}

bootstrap();
