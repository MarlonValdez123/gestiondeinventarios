import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlertaStockDto {
    @IsNotEmpty()
    id_producto: number;

    @IsNotEmpty()
    @IsNumber()
    nivel_minimo: number;

    @IsString()
    estado?: 'Activo' | 'Inactivo';
}