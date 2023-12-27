import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  const config = new DocumentBuilder()
    .setTitle('Documentacion de la Aplicación')
    .setDescription('Lista de endpoints')
    .setVersion('1.0')
    .addTag('EXCHANGE')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
