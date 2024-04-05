/* eslint-disable prettier/prettier */
// config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'isilo.db.elephantsql.com',
    port: 5432,
    username: 'ewfgwcgb',
    password: 'Ec9P_wsuVCuwRdtsKyImTbsvvkxhKQGD',
    database: 'ewfgwcgb',
    entities: [],
    synchronize: false,
};

export { typeOrmConfig };