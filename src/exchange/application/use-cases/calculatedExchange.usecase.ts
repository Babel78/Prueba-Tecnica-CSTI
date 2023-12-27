import { Injectable } from '@nestjs/common';
import { ExchangeRepository } from '../../domain/Exchange.repository';
import { CalculatedExchangeDto } from '../dto/calculatedExchange.dto';
import { ResponseCalculatedExchange } from '../dto/responseCalculatedExchange.dto';

@Injectable()
export class CalculatedExchange {
  constructor(private readonly exchangeRepository: ExchangeRepository) {}

  async execute(
    data: CalculatedExchangeDto,
  ): Promise<ResponseCalculatedExchange> {
    return this.exchangeRepository.calculatedExchange(data);
  }
}
