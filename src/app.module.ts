import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import redisConfig from './config/redis.config';

import { PrismaModule } from './database/prisma/prisma.module';
import { StorageModule } from './integrations/storage/storage.module';
import { MailModule } from './integrations/mail/mail.module';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ServicesModule } from './modules/services/services.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { EnquiriesModule } from './modules/enquiries/enquiries.module';
import { TestimonialsModule } from './modules/testimonials/testimonials.module';
import { ContactInfoModule } from './modules/contact-info/contact-info.module';
import { SavedDesignsModule } from './modules/saved-designs/saved-designs.module';
import { HealthModule } from './health/health.module';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, jwtConfig, redisConfig],
    }),
    PrismaModule,
    StorageModule,
    MailModule,
    AuthModule,
    UsersModule,
    ServicesModule,
    ProjectsModule,
    EnquiriesModule,
    TestimonialsModule,
    ContactInfoModule,
    SavedDesignsModule,
    HealthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
