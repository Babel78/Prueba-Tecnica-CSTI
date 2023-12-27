import { MockProxy, mock } from 'jest-mock-extended';
import { ExchangeRepository } from 'src/exchange/domain/Exchange.Repository';
import {
  payloadCreateExchange,
  payloadErrorValidarDatos,
} from './mock/data.mock';
import { CreateExchange } from '../createExchange.usecase';
import { breakReference } from './utils/utils';

describe('Crear Nuevo Tipo de Cambio', () => {
  let mockRepository: MockProxy<ExchangeRepository>;
  let SUT: CreateExchange;

  beforeEach(() => {
    mockRepository = mock();
    SUT = new CreateExchange(mockRepository);
  });

  it('Creación Exitosa', async () => {
    mockRepository.create.mockResolvedValue(payloadCreateExchange.response);
    const result = await SUT.execute(payloadCreateExchange.request);
    expect(result).toEqual(payloadCreateExchange.response);
  });

  it('Error validar Datos', async () => {
    const request = breakReference(payloadCreateExchange.request);
    request.money_from = '';
    mockRepository.create.mockResolvedValue(payloadErrorValidarDatos.response);
    const result = await SUT.execute(request);
    expect(result.statusCode).toEqual(
      payloadErrorValidarDatos.response.statusCode,
    );
  });
});
