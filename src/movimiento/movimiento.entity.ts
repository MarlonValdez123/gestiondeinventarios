export interface Movimiento {
    id_movimiento?: number;
    id_producto: number;
    tipo_movimiento: 'Entrada' | 'Salida' | 'Ajuste';
    cantidad: number;
    fecha_movimiento?: Date;
    motivo?: string;
    id_usuario?: number;
    costo_unitario?: number;
    ubicacion?: string;
}