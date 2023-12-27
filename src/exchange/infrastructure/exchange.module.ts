import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExchange } from './persistence/typeorm/TypeOrmExchange';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';
import { ExchangeRepository } from '../domain/Exchange.repository';
import { TypeOrmExchangeRepository } from './persistence/TypeOrmExchangeRepository';
import { CalculatedExchange } from '../application/use-cases/calculatedExchange.usecase';
import { CreateExchange } from '../application/use-cases/createExchange.usecase';
import { UpdateTypeExchange } from '../application/use-cases/updateTypeExchange.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmExchange])],
  controllers: [ExchangeController],
  providers: [
    ExchangeService,
    { provide: ExchangeRepository, useClass: TypeOrmExchangeRepository },
    CalculatedExchange,
    CreateExchange,
    UpdateTypeExchange,
  ],
})
export class ExchangeModule {}
