import { Injectable } from '@nestjs/common';
import { ExchangeRepository } from '../../domain/Exchange.repository';
import { CreateExchangeDto } from '../dto/createExchange.dto';

@Injectable()
export class CreateExchange {
  constructor(private readonly exchangeRespository: ExchangeRepository) {}

  async execute(data: CreateExchangeDto) {
    return this.exchangeRespository.create(data);
  }
}
