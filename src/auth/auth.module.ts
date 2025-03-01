// src/auth/auth.module.ts
import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();
const authController = new AuthController();

// Rutas de autenticación
router.post('/login', authController.login.bind(authController));
router.post('/register', authController.register.bind(authController)); // Agrega la ruta de registro

export default router;