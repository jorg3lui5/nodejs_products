/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const categoria = {
      id: uuidv4(),
      ...this.categoriaRepository.create(createCategoriaDto)
    };
    return await this.categoriaRepository.save(categoria);
  }

  async findAll(): Promise<Categoria[]> {
    const categorias = await this.categoriaRepository.find();
    return this.verificarYRetornarCategorias(categorias);
  }

  async findOne(id: string): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({where: {id: id}});
    if(!categoria)
      throw new NotFoundException(`No se encontraron datos.`)
    return categoria;
  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({where: {id: id}});
    this.categoriaRepository.merge(categoria, updateCategoriaDto);
    return await this.categoriaRepository.save(categoria);
  }

  async remove(id: string): Promise<void> {
    await this.categoriaRepository.delete(id);
  }

  private async verificarYRetornarCategorias(categorias: Categoria[]): Promise<Categoria[]> {
    if (categorias.length === 0)
      throw new NotFoundException(`No se encontraron datos.`);
    return categorias;
  }
}
