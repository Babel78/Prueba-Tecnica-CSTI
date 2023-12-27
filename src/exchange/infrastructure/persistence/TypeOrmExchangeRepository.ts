import { Injectable } from '@nestjs/common';
import { CalculatedExchangeDto } from '../../application/dto/calculatedExchange.dto';
import { ResponseCalculatedExchange } from '../../application/dto/responseCalculatedExchange.dto';
import { ExchangeRepository } from '../../domain/Exchange.repository';
import { ExchangeService } from '../exchange.service';
import { Exchange } from '../../domain/Exchange';
import { CreateExchangeDto } from '../../application/dto/createExchange.dto';
import { UpdateTypeExchangeDto } from '../../application/dto/updateTypeExchange.dto';

@Injectable()
export class TypeOrmExchangeRepository implements ExchangeRepository {
  constructor(private readonly service: ExchangeService) {}
  updateTypeExchange(data: UpdateTypeExchangeDto): Promise<any> {
    return this.service.updateTypeExchange(data);
  }
  create(data: CreateExchangeDto): Promise<Exchange> {
    return this.service.create(data);
  }
  calculatedExchange(
    data: CalculatedExchangeDto,
  ): Promise<ResponseCalculatedExchange> {
    return this.service.calcultatedExchange(data);
  }
}
