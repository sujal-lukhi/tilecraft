import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // Global Prefix
  app.setGlobalPrefix('api/v1');

  // Serve Uploads Directory as Static Assets
  const uploadDir = process.env.UPLOAD_DIR || './uploads';
  app.use('/uploads', express.static(path.resolve(uploadDir)));

  // CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Global Filters & Interceptors
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );

  // Swagger Documentation Setup
  const config = new DocumentBuilder()
    .setTitle('Tilecraft Interiors API')
    .setDescription(
      'NestJS Backend API for Tilecraft Interiors - Supporting Public Customer Website, Customer Dashboard, and Admin Dashboard.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Health', 'API System Health check')
    .addTag('Auth', 'Customer Register/Login & Secure Admin Login')
    .addTag('Users', 'Customer Profile & Admin Customer Management')
    .addTag('Services', 'Public Services (Bathroom, Flooring, Kitchen, Stone & Marble, Staircase) & Admin CRUD')
    .addTag('Projects & Gallery', 'Portfolio Showcase, Photos, Videos, Before/After & Uploads')
    .addTag('Enquiries & Quotes', 'Public Quote Requests, Customer Tracking & Admin Management')
    .addTag('Testimonials', 'Public Client Testimonials & Admin Moderation')
    .addTag('Contact Info', 'Public Company Details & Admin Updates')
    .addTag('Saved Designs', 'Customer Saved Design Bookmarks')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  logger.log(`🚀 Tilecraft Interiors API is running on: http://localhost:${port}/api/v1`);
  logger.log(`📚 Interactive Swagger API Docs available at: http://localhost:${port}/api/docs`);
}

bootstrap();
