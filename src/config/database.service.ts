import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise'; // Usando MySQL2 para gestionar la conexión

@Injectable()
export class DatabaseService {
  private pool: Pool;

  constructor() {
    this.pool = createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USERNAME || 'devuser',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_DATABASE || 'GestionInventarios',
    });
  }

  // Método genérico para ejecutar consultas
  async query<T>(sql: string, params: any[] = []): Promise<T[]> {
    const [rows] = await this.pool.execute(sql, params);
    return rows as T[]; // Tipamos el resultado como un array de tipo T
  }
}
