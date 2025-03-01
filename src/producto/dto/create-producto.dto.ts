import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductoDto {
    @IsNotEmpty()
    @IsString()
    codigo_barras: string;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsString()
    descripcion?: string;

    @IsNotEmpty()
    @IsNumber()
    id_categoria: number;

    @IsNotEmpty()
    @IsNumber()
    precio_compra: number;

    @IsNotEmpty()
    @IsNumber()
    precio_venta: number;

    @IsNotEmpty()
    @IsNumber()
    stock_minimo: number;

    @IsNotEmpty()
    @IsNumber()
    stock_maximo: number;

    id_empresa?: number;
    id_proveedor?: number;
}