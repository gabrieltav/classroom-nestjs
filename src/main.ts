import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './modules/students/interceptors/transform.interceptors';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new TransformInterceptor());
  const configService: ConfigService = app.get(ConfigService);
  app.setGlobalPrefix('/api');
  await app.listen(configService.get('server.port'));

}

bootstrap();
