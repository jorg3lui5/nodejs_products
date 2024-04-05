/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto): Promise<Producto> {
    return this.productoService.create(createProductoDto);
  }

  @Get()
  findAll(): Promise<Producto[]> {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Producto> {
    return this.productoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto): Promise<Producto> {
    return this.productoService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productoService.remove(+id);
  }

  @Get('/category/active')
  findAllWithActiveCategory(): Promise<Producto[]> {
    return this.productoService.findAllWithActiveCategory();
  }

  @Get('/talle/medium-large')
  findAllWithTalleMediumLarge(): Promise<Producto[]> {
    return this.productoService.findAllWithTalleMediumLarge();
  }
}
