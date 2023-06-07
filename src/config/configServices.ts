import { dbConfig } from './typeorm.config';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: dbConfig,
  JWT_SECRET: process.env.JWT_SECRET,
});
