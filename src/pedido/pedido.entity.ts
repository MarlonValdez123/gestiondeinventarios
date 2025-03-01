export interface Pedido {
    id_pedido?: number;
    id_empresa: number;
    fecha_solicitud?: Date;
    fecha_entrega?: Date;
    estado?: 'Pendiente' | 'Entregado' | 'Cancelado';
}