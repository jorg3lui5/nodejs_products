/* eslint-disable prettier/prettier */

import { IsInt, IsNotEmpty, IsNumber } from "class-validator";


export class CategoriaDto {
    @IsNotEmpty()
    @IsNumber()
    @IsInt()
    id: number;
}
