/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString, MaxLength, IsBoolean } from 'class-validator';

export class CreateCategoriaDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    nombre: string;
  
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    descripcion: string;

    @IsBoolean()
    @IsOptional()
    activa: boolean;
}
