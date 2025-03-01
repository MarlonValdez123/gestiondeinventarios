import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateProveedorDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsString()
    contacto?: string;

    @IsString()
    telefono?: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    direccion?: string;
}