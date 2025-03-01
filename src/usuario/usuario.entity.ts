export interface Usuario {
    id_usuario?: number;
    nombre_completo: string;
    email: string;
    telefono?: string;
    estado?: 'Activo' | 'Inactivo';
    fecha_creacion?: Date;
    ultima_conexion?: Date;
    password_hash: string;
    id_empresa?: number;
}