/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { Talle } from '../enum/talle.enum';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity()
@Index('idx_codigo', ['codigo'], { unique: true })
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 30, nullable: false })
  codigo: string;

  @Column({ length: 100, nullable: false })
  nombre: string;

  @ManyToOne(() => Categoria, categoria => categoria.productos)
  @JoinColumn({name: "categoria_id"})
  categoria: Categoria;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio: number;

  @Column('enum', { enum: Talle })
  talle: Talle;
}
