import { CalculatedExchangeDto } from '../application/dto/calculatedExchange.dto';
import { ResponseCalculatedExchange } from '../application/dto/responseCalculatedExchange.dto';
import { UpdateTypeExchangeDto } from '../application/dto/updateTypeExchange.dto';
import { Exchange } from './Exchange';

export abstract class ExchangeRepository {
  abstract calculatedExchange(
    data: CalculatedExchangeDto,
  ): Promise<ResponseCalculatedExchange>;

  abstract create(data: Exchange): Promise<any | Exchange>;

  abstract updateTypeExchange(data: UpdateTypeExchangeDto): Promise<any>;
}
