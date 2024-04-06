/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriaService } from '../categoria/categoria.service';

@Injectable()
export class CategoriasFixture {
  constructor(private readonly categoriaService: CategoriaService) {}

  async createCategorias(): Promise<void> {
    try {
      await this.categoriaService.findAll();
    } catch (error) {
        if (error instanceof NotFoundException) {
            await this.categoriaService.create({ nombre: 'Electrónica', descripcion: 'Productos electrónicos y dispositivos tecnológicos', activa: true });
            await this.categoriaService.create({ nombre: 'Deportes', descripcion: 'Equipamiento deportivo y accesorios', activa: false });
            await this.categoriaService.create({ nombre: 'Electrodomésticos', descripcion: 'Aparatos electrodomésticos para el hogar', activa: true });
            await this.categoriaService.create({ nombre: 'Hogar y Jardín', descripcion: 'Artículos para el hogar y herramientas de jardinería', activa: true });  
        }
    }
  }
}