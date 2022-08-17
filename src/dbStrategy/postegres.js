import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const databaseConfig = {
  user: 'postgres',
  password: '123',
  host: 'localhost',
  port: 5432,
  database: 'laboleria',
};

const connection = new Pool(databaseConfig);

export default connection;
