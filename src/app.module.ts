/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //synchronize: true
    }),
    CategoriaModule, 
    ProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
