import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || '127.0.0.1',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'busi',
  schema: process.env.DB_SHEMA || 'busi',
  port: Number(process.env.DB_PORT) || 5432,

  synchronize: true, //TODO: set to false before going to prod
  entities:
    process.env.NODE_ENV !== 'production'
      ? ['**/**.entity.ts'] /*,'dist/entities/*{.js,.ts}'*/
      : ['dist/**/*.entity.js'],
  logging: process.env.NODE_ENV !== 'production' ? 'all' : ['error'],
  migrations: ['dist/migrations/*.js'],

});

