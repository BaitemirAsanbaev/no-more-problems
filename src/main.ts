import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function start() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000
  await app.listen( port, ()=>{
    const logger = new Logger()
    logger.log(`started at ${port} port`)
  });
}
start();
