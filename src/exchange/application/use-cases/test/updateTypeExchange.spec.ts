import { MockProxy, mock } from 'jest-mock-extended';
import { ExchangeRepository } from 'src/exchange/domain/Exchange.Repository';
import {
  payloadErrorNotFound,
  payloadUpdateTypeExchange,
} from './mock/data.mock';
import { breakReference } from './utils/utils';
import { UpdateTypeExchange } from '../updateTypeExchange.usecase';

describe('Actualizar el Tipo de Cambio', () => {
  let mockRepository: MockProxy<ExchangeRepository>;
  let SUT: UpdateTypeExchange;

  beforeEach(() => {
    mockRepository = mock();
    SUT = new UpdateTypeExchange(mockRepository);
  });

  it('Actualización Exitosa', async () => {
    mockRepository.updateTypeExchange.mockResolvedValue(
      payloadUpdateTypeExchange.response,
    );
    const result = await SUT.execute(payloadUpdateTypeExchange.request);
    expect(result).toEqual(payloadUpdateTypeExchange.response);
  });

  it('No se encontró el tipo de cambio', async () => {
    const request = breakReference(payloadUpdateTypeExchange.request);
    request.money_from = '';
    mockRepository.updateTypeExchange.mockResolvedValue(
      payloadErrorNotFound.response,
    );
    const result = await SUT.execute(payloadUpdateTypeExchange.request);
    expect(result).toEqual(payloadErrorNotFound.response);
  });
});
