import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MailModule } from './modules/mail/mail.module';

dotenv.config();

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      entities: [join(__dirname, '**', '*.entity.{js,ts}')],
      migrations: [join(__dirname, '..', 'shared', 'typeorm', 'migrations', '*.{js,ts}')],
      subscribers: [],
    }),
    MailModule,
    AuthModule,
  ],
})
export class AppModule {}
