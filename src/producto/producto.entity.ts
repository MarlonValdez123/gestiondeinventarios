export interface Producto {
    id_producto?: number;
    codigo_barras: string;
    nombre: string;
    descripcion?: string;
    id_categoria?: number;
    precio_compra: number;
    precio_venta: number;
    stock_minimo: number;
    stock_maximo: number;
    id_empresa?: number;
    id_proveedor?: number;
    fecha_creacion?: Date;
    ultima_actualizacion?: Date;
}