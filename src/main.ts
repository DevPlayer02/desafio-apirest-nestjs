import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './shared/typeorm/data-source';

async function bootstrap() {
  AppDataSource.initialize()
    .then(async () => {
      console.log('✅ Database connected successfully!');
      
      const app = await NestFactory.create(AppModule);
      await app.listen(process.env.PORT ?? 3000);
    })
    .catch((error) => console.log('DB connection error', error));
}
bootstrap();
