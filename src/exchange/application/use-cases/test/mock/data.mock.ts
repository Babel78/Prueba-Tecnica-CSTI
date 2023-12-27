export const payloadCalculatedExchange = {
  request: {
    money_from: 'PEN',
    money_to: 'USD',
    amount: 1000,
  },
  response: {
    amount: 1000,
    money_from: 'PEN',
    money_to: 'USD',
    amount_calculated: 270,
    type_exchange: 0.27,
  },
};

export const payloadCreateExchange = {
  request: {
    money_from: 'EUR',
    money_to: 'PEN',
    type_exchange: 4.07,
  },
  response: {
    message: 'Se creo correctamente.',
  },
};

export const payloadErrorValidarDatos = {
  response: {
    message: ['money_from should not be empty'],
    error: 'Bad Request',
    statusCode: 400,
  },
};

export const payloadUpdateTypeExchange = {
  request: {
    money_from: 'EUR',
    money_to: 'PEN',
    type_exchange: 10,
  },
  response: {
    message: 'Se actualizo correctamente.',
  },
};

export const payloadErrorNotFound = {
  response: {
    message: 'No se encontro resultados.',
  },
};
