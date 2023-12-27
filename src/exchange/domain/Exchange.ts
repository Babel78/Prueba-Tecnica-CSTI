export class Exchange {
  money_from: string;
  money_to: string;
  type_exchange: number;

  constructor(data: Partial<Exchange>) {
    Object.assign(this, data);
  }
}
