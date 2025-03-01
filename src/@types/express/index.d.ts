// src/@types/express/index.d.ts

import { User } from "../models/user"; // Asegúrate de importar tu tipo de usuario

declare global {
    namespace Express {
        interface Request {
            user?: User; // Agrega la propiedad user
        }
    }
}