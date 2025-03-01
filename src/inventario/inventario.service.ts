import pool from '../config/database.config';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { OkPacket } from 'mysql2';

export class InventarioService {
    async create(createInventarioDto: CreateInventarioDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Inventario SET ?', createInventarioDto);
        return { id_inventario: result.insertId, ...createInventarioDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Inventario');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Inventario WHERE id_inventario = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateInventarioDto>) {
        await pool.query('UPDATE Inventario SET ? WHERE id_inventario = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Inventario WHERE id_inventario = ?', [id]);
    }
}