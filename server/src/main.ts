import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedService } from './seeder/seeder.service';
import { NestApplicationOptions } from '@nestjs/common';

async function bootstrap() {
  const corsConfig: NestApplicationOptions['cors'] = {
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    origin: true,
  };
  const app = await NestFactory.create(AppModule, { cors: corsConfig });

  const seedService = app.get(SeedService);
  await seedService.seedData();

  await app.listen(process.env.PORT ?? 3006);
}
bootstrap();
