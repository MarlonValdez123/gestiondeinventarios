export class CreateEmpresaDto {
    nombre: string;
    ruc: string;
    direccion: string;
    telefono: string;
    email_contacto: string;
    sector: string;
    estado: 'Activo' | 'Inactivo';
  }