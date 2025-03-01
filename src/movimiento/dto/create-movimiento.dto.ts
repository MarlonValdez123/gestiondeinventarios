import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMovimientoDto {
    @IsNotEmpty()
    id_producto: number;

    @IsNotEmpty()
    @IsString()
    tipo_movimiento: 'Entrada' | 'Salida' | 'Ajuste';

    @IsNotEmpty()
    @IsNumber()
    cantidad: number;

    @IsString()
    motivo?: string;

    id_usuario?: number;
    costo_unitario?: number;
    ubicacion?: string;
}