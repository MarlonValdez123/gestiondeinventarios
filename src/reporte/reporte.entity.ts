export interface Reporte {
    id_reporte?: number;
    id_empresa: number;
    tipo: 'Inventario' | 'Ventas' | 'Pérdidas';
    fecha_generacion?: Date;
    archivo_pdf: string;
    id_usuario?: number;
}