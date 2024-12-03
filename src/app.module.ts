import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';

@Module({
  imports: [
    ConfigModule.forRoot({
       envFilePath: `.env`
    }),
    SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRESS_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User],
        autoLoadModels: true
    }),
    UsersModule
  ],
  controllers: [UsersController]
})
export class AppModule {}
