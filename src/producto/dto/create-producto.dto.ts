/* eslint-disable prettier/prettier */
import { Talle } from '../enum/talle.enum';
import { IsNotEmpty, IsString, MaxLength, IsEnum, IsDecimal, Min, ValidateNested } from 'class-validator';
import { CategoriaDto } from './categoria.dto';

export class CreateProductoDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    codigo: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    nombre: string;

    @IsNotEmpty()
    @ValidateNested()
    categoria: CategoriaDto;

    @IsNotEmpty()
    @IsDecimal()
    precio: number;

    @IsNotEmpty()
    @IsEnum(Talle)
    talle: Talle;
}
