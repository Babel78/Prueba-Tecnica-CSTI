import { Injectable } from '@nestjs/common';
import { ExchangeRepository } from '../../domain/Exchange.repository';
import { UpdateTypeExchangeDto } from '../dto/updateTypeExchange.dto';

@Injectable()
export class UpdateTypeExchange {
  constructor(private readonly exchangeRespository: ExchangeRepository) {}

  async execute(data: UpdateTypeExchangeDto) {
    return this.exchangeRespository.updateTypeExchange(data);
  }
}
