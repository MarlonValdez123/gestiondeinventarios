// src/auth/jwt-auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['authorization']?.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('No token provided');
        }

        const user = this.authService.verifyToken(token);
        if (!user) {
            throw new UnauthorizedException('Invalid token');
        }

        request.user = user; // Almacena el usuario en la solicitud
        return true;
    }
}