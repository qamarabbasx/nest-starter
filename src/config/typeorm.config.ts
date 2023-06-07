import { DataSource, DataSourceOptions } from 'typeorm';

import 'dotenv/config';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  // host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME, // your username
  password: process.env.DB_PASSWORD, // your password
  database: process.env.DB_NAME, // name of the database
  entities: ['dist/src/**/**/*.entity.{js,ts}'], // path to entities
  synchronize: false,
  migrationsRun: true,
  logging: true,
  migrations: ['dist/src/migrations/*.{js,ts}'],
};

export const dbConfig = {
  typeOrmConfig
}
