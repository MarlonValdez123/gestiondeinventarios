export interface AlertaStock {
    id_alerta?: number;
    id_producto: number;
    nivel_minimo: number;
    estado?: 'Activo' | 'Inactivo';
    fecha_creacion?: Date;
}