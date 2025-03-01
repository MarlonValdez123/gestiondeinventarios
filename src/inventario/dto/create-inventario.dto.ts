import { IsNotEmpty } from 'class-validator';

export class CreateInventarioDto {
    @IsNotEmpty()
    id_empresa: number;
}