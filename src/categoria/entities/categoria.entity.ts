/* eslint-disable prettier/prettier */
import { Producto } from 'src/producto/entities/producto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 100 })
    nombre: string;
  
    @Column({ length: 255 })
    descripcion: string;
  
    @Column({ default: true })
    activa: boolean;
  
    @OneToMany(() => Producto, producto => producto.categoria)
    productos: Producto[];
  }