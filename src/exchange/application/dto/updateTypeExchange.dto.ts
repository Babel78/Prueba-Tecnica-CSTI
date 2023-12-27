import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateTypeExchangeDto {
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
}
