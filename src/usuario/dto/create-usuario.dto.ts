import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUsuarioDto {
    @IsNotEmpty()
    @IsString()
    nombre_completo: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    telefono?: string;

    @IsString()
    estado?: 'Activo' | 'Inactivo';

    @IsNotEmpty()
    @IsString()
    password_hash: string;

    id_empresa?: number;
}