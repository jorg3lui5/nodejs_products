/* eslint-disable prettier/prettier */
import { Producto } from 'src/producto/entities/producto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ length: 100, nullable: false })
    nombre: string;
  
    @Column({ length: 255, nullable: false })
    descripcion: string;
  
    @Column({ default: true })
    activa: boolean;
  
    @OneToMany(() => Producto, producto => producto.categoria)
    productos: Producto[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
  }