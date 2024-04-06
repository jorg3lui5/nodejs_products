/* eslint-disable prettier/prettier */
// config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Producto } from '../producto/entities/producto.entity';
import { Categoria } from '../categoria/entities/categoria.entity';

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'isilo.db.elephantsql.com',
    port: 5432,
    username: 'ewfgwcgb',
    password: 'Ec9P_wsuVCuwRdtsKyImTbsvvkxhKQGD',
    database: 'ewfgwcgb',
    entities: [Producto, Categoria],
    synchronize: true,
};

export { typeOrmConfig };