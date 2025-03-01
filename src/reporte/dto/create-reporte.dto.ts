import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReporteDto {
    @IsNotEmpty()
    id_empresa: number;

    @IsNotEmpty()
    tipo: 'Inventario' | 'Ventas' | 'Pérdidas';

    @IsNotEmpty()
    @IsString()
    archivo_pdf: string;

    id_usuario?: number;
}