import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ResponseCalculatedExchange {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount_calculated: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  money_from: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  money_to: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  type_exchange: number;

  constructor(data: Partial<ResponseCalculatedExchange>) {
    Object.assign(this, data);
  }
}
