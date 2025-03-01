import pool from '../config/database.config';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { OkPacket } from 'mysql2';

export class ReporteService {
    async create(createReporteDto: CreateReporteDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Reporte SET ?', createReporteDto);
        return { id_reporte: result.insertId, ...createReporteDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Reporte');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Reporte WHERE id_reporte = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateReporteDto>) {
        await pool.query('UPDATE Reporte SET ? WHERE id_reporte = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Reporte WHERE id_reporte = ?', [id]);
    }
}