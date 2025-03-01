// src/auth/auth.service.ts
import { createHash } from 'crypto';
import pool from '../config/database.config';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Auth } from './auth.entity';
import jwt from 'jsonwebtoken';
import { RowDataPacket, OkPacket } from 'mysql2';

export class AuthService {
    async validateUser (email: string, password: string): Promise<Auth | null> {
        const [rows] = await pool.query('SELECT * FROM Usuario WHERE email = ?', [email]) as [RowDataPacket[], any];
        const user = rows[0];

        if (user && user.password_hash === this.hashPassword(password)) {
            return user as Auth; // Asegúrate de que el tipo sea Auth
        }
        return null;
    }

    private hashPassword(password: string): string {
        return createHash('sha256').update(password).digest('hex');
    }

    async login(loginDto: LoginDto) {
        const user = await this.validateUser (loginDto.email, loginDto.password);
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ id_usuario: user.id_usuario }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        return { token, user };
    }

    async register(registerDto: RegisterDto) {
        const { email, password, nombre_completo } = registerDto;

        // Verificar si el usuario ya existe
        const [existingUser ] = await pool.query('SELECT * FROM Usuario WHERE email = ?', [email]) as [RowDataPacket[], any];
        if (existingUser .length > 0) {
            throw new Error('El usuario ya existe');
        }

        // Crear un nuevo usuario
        const passwordHash = this.hashPassword(password);
        const [result] = await pool.query('INSERT INTO Usuario (nombre_completo, email, password_hash) VALUES (?, ?, ?)', [nombre_completo, email, passwordHash]) as [OkPacket, any];

        return { id_usuario: result.insertId, email };
    }

    // Método para verificar el token JWT
    verifyToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET); // Asegúrate de que JWT_SECRET esté en tu archivo .env
        } catch (error) {
            return null; // Si el token no es válido, devuelve null
        }
    }
}