import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExchange } from '../../../exchange/infrastructure/persistence/typeorm/TypeOrmExchange';

export class MysqlTypeormClient {
  static create() {
    return TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_ROOT_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [TypeOrmExchange],
      synchronize: true,
    });
  }
}
