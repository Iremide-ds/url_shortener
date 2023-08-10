import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dbHost, dbName, dbPass, dbPort, dbUser } from './env_variables';
import { DataSource } from 'typeorm';

const dev: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};

const prod: TypeOrmModuleOptions = {
  type: 'mysql',
  username: dbUser,
  password: dbPass,
  database: dbName,
  port: dbPort,
  host: dbHost,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

export const dataSource = new DataSource({
  type: 'mysql',
  username: dbUser,
  password: dbPass,
  database: dbName,
  port: dbPort,
  host: dbHost,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
});

export default process.env.NODE_ENV == 'production' ? prod : dev;
