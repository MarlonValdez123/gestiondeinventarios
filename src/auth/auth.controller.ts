// src/auth/auth.controller.ts
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

const authService = new AuthService();

export class AuthController {
    async login(req: Request, res: Response) {
        const loginDto: LoginDto = req.body;
        try {
            const result = await authService.login(loginDto);
            res.json(result);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }

    async register(req: Request, res: Response) {
        const registerDto: RegisterDto = req.body; // Asegúrate de que el DTO tenga email, password y nombre completo
        try {
            const result = await authService.register(registerDto);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}