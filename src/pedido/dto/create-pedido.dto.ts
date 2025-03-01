import { IsNotEmpty } from 'class-validator';

export class CreatePedidoDto {
    @IsNotEmpty()
    id_empresa: number;

    fecha_entrega?: Date;
    estado?: 'Pendiente' | 'Entregado' | 'Cancelado';
}