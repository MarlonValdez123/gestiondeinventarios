export interface Empresa {
    id_empresa?: number;
    nombre: string;
    ruc: string;
    direccion?: string;
    telefono?: string;
    email_contacto?: string;
    sector?: string;
    estado?: 'Activo' | 'Inactivo';
}