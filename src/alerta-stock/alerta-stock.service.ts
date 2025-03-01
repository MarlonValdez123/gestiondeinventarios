import pool from '../config/database.config';
import { CreateAlertaStockDto } from './dto/create-alerta-stock.dto';
import { OkPacket } from 'mysql2';

export class AlertaStockService {
    async create(createAlertaStockDto: CreateAlertaStockDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Alerta_Stock SET ?', createAlertaStockDto);
        return { id_alerta: result.insertId, ...createAlertaStockDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Alerta_Stock');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Alerta_Stock WHERE id_alerta = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateAlertaStockDto>) {
        await pool.query('UPDATE Alerta_Stock SET ? WHERE id_alerta = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Alerta_Stock WHERE id_alerta = ?', [id]);
    }
}