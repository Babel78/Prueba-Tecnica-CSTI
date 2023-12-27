import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CalculatedExchange } from '../application/use-cases/calculatedExchange.usecase';
import { CreateExchange } from '../application/use-cases/createExchange.usecase';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateExchangeDto } from '../application/dto/createExchange.dto';
import { CalculatedExchangeDto } from '../application/dto/calculatedExchange.dto';
import { ResponseCalculatedExchange } from '../application/dto/responseCalculatedExchange.dto';
import { UpdateTypeExchangeDto } from '../application/dto/updateTypeExchange.dto';
import { UpdateTypeExchange } from '../application/use-cases/updateTypeExchange.usecase';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('exchange')
@Controller('exchange')
export class ExchangeController {
  constructor(
    private readonly calculatedExchange: CalculatedExchange,
    private readonly createExchange: CreateExchange,
    private readonly updateTypeExchange: UpdateTypeExchange,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('calculated')
  @ApiOperation({
    description: 'Calcular el tipo de cambio.',
  })
  @ApiBody({
    type: CalculatedExchangeDto,
  })
  @ApiOkResponse({ type: ResponseCalculatedExchange })
  calcutadExchange(@Body() data: CalculatedExchangeDto) {
    return this.calculatedExchange.execute(data);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({
    description: 'Crear un nuevo tipo de cambio.',
  })
  @ApiBody({
    type: CreateExchangeDto,
  })
  @ApiOkResponse({ description: 'Se creo correctamente.' })
  create(@Body() data: CreateExchangeDto) {
    return this.createExchange.execute(data);
  }

  @UseGuards(JwtAuthGuard)
  @Post('update')
  @ApiOperation({
    description: 'Actualizar el tipo de cambio.',
  })
  @ApiOkResponse({ description: 'Se actualizo correctamente.' })
  updateValueExchange(@Body() data: UpdateTypeExchangeDto) {
    return this.updateTypeExchange.execute(data);
  }
}
