import { MockProxy, mock } from 'jest-mock-extended';
import { ExchangeRepository } from 'src/exchange/domain/Exchange.Repository';
import { CalculatedExchange } from '../calculatedExchange.usecase';
import { payloadCalculatedExchange } from './mock/data.mock';

describe('Calcular Tipo de Cambio', () => {
  let mockRepository: MockProxy<ExchangeRepository>;
  let SUT: CalculatedExchange;

  beforeEach(() => {
    mockRepository = mock();
    SUT = new CalculatedExchange(mockRepository);
  });

  it('Calculo Exitoso', async () => {
    mockRepository.calculatedExchange.mockResolvedValue(
      payloadCalculatedExchange.response,
    );
    expect(await SUT.execute(payloadCalculatedExchange.request)).toEqual(
      payloadCalculatedExchange.response,
    );
  });
});
