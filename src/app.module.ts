import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeModule } from './exchange/infrastructure/exchange.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './shared/infrastructure/all-exceptions.filter';
import { MysqlTypeormClient } from './shared/infrastructure/persistence/MysqlTypeOrmClient';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ExchangeModule,
    AuthModule,
    ConfigModule.forRoot(),
    MysqlTypeormClient.create(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
