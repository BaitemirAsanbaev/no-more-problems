import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;
  const config = new DocumentBuilder()
    .setTitle('No More Problems')
    .setDescription('Documentation for REST API of solving problems of over a million users')
    .setVersion('1.0.0')
    .addTag('NEST')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  app.enableCors({
    origin: [
      process.env.CLIENT_URL
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(port, () => {
    const logger = new Logger();
    logger.log(`started at ${port} port`);
  });
}
start();
