import pool from '../config/database.config';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { OkPacket } from 'mysql2';

export class MovimientoService {
    async create(createMovimientoDto: CreateMovimientoDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Movimiento_Inventario SET ?', createMovimientoDto);
        return { id_movimiento: result.insertId, ...createMovimientoDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Movimiento_Inventario');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Movimiento_Inventario WHERE id_movimiento = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateMovimientoDto>) {
        await pool.query('UPDATE Movimiento_Inventario SET ? WHERE id_movimiento = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Movimiento_Inventario WHERE id_movimiento = ?', [id]);
    }
}