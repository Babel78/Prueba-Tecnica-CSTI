import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmExchange } from './persistence/typeorm/TypeOrmExchange';
import { Repository } from 'typeorm';
import { ResponseCalculatedExchange } from '../application/dto/responseCalculatedExchange.dto';

@Injectable()
export class ExchangeService {
  constructor(
    @InjectRepository(TypeOrmExchange)
    private exchangeRepository: Repository<TypeOrmExchange>,
  ) {}

  async create(data): Promise<any> {
    const exchange = new TypeOrmExchange();
    exchange.money_from = data.money_from;
    exchange.money_to = data.money_to;
    exchange.type_exchange = data.type_exchange;
    const existsRow = await this.exchangeRepository.findOneBy({
      money_from: data.money_from,
      money_to: data.money_to,
    });
    if (existsRow) {
      return new HttpException(
        { message: 'Ya existe un resultado con los parametos.' },
        HttpStatus.BAD_REQUEST,
      );
    }
    await exchange.save();
    return { message: 'Se creo correctamente.' };
  }

  async calcultatedExchange(data): Promise<any> {
    const { money_from, money_to, amount } = data;
    const exchangeResult = await this.exchangeRepository.findOneBy({
      money_from,
      money_to,
    });
    if (!exchangeResult) {
      throw new HttpException(
        { message: 'No se encontro resultado con los parametros.' },
        HttpStatus.NOT_FOUND,
      );
    }
    const new_amount = exchangeResult.type_exchange * amount;
    const objectResult = new ResponseCalculatedExchange({
      amount,
      money_from,
      money_to,
      amount_calculated: new_amount,
      type_exchange: exchangeResult.type_exchange,
    });
    return objectResult;
  }

  async updateTypeExchange(data): Promise<any> {
    const { type_exchange, money_from, money_to } = data;
    const existsRow = await this.exchangeRepository.findOneBy({
      money_from,
      money_to,
    });
    if (!existsRow) {
      throw new HttpException(
        { message: 'No se encontro resultados.' },
        HttpStatus.NOT_FOUND,
      );
    }
    existsRow.type_exchange = type_exchange;
    await existsRow.save();
    return { message: 'Se actualizo correctamente.' };
  }
}
