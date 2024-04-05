/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { Talle } from './enum/talle.enum';


@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}
  
  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const producto = this.productoRepository.create(createProductoDto);
    return await this.productoRepository.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return await this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    return await this.productoRepository.findOne({where: {id: id}});
  }

  async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.productoRepository.findOne({where: {id: id}});
    this.productoRepository.merge(producto, updateProductoDto);
    return await this.productoRepository.save(producto);
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }

  async findAllWithActiveCategory(): Promise<Producto[]> { 
    // Realiza la consulta para obtener los productos con sus categorías activas
    return await this.productoRepository.find({
      relations: ['categoria'], 
      where: {
        categoria: {
          activa: true,
        },
      },
    });  
  }

  async findAllWithTalleMediumLarge(): Promise<Producto[]>  {    
    return await this.productoRepository.find();
    // const talles = ['MEDIUM', 'LARGE'];
    // return await this.productoRepository
    //     .createQueryBuilder('producto')
    //     .where('producto.talle = :talle1', { talle1: 'MEDIUM'})
    //     .getMany();
}
}
