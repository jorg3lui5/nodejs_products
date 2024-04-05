/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
    const productos = await this.productoRepository.find();
    return this.verificarYRetornarProductos(productos);
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOne({where: {id: id}});
    if(!producto)
      throw new NotFoundException(`No se encontraron datos.`)
    return producto;
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
    const productos = await this.productoRepository.find({
      relations: ['categoria'], 
      where: {
        categoria: {
          activa: true,
        },
      },
    });  
    return this.verificarYRetornarProductos(productos);
  }

  async findAllWithTalleMediumLarge(): Promise<Producto[]>  {
    const talles = [Talle.MEDIUM, Talle.LARGE];
    const productos = await this.productoRepository
        .createQueryBuilder('producto')
        .where('producto.talle IN (:...talles)', { talles })
        .getMany();
    return this.verificarYRetornarProductos(productos);
  }

  private async verificarYRetornarProductos(productos: Producto[]): Promise<Producto[]> {
    if (productos.length === 0)
      throw new NotFoundException(`No se encontraron datos.`);
    return productos;
  }
}
