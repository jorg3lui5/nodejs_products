/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from "class-validator";


export class CategoriaDto {
    @IsNotEmpty()
    @IsString()
    id: string;
}
