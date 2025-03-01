import pool from '../config/database.config';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { OkPacket } from 'mysql2';

export class ProveedorService {
    async create(createProveedorDto: CreateProveedorDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Proveedor SET ?', createProveedorDto);
        return { id_proveedor: result.insertId, ...createProveedorDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Proveedor');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Proveedor WHERE id_proveedor = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateProveedorDto>) {
        await pool.query('UPDATE Proveedor SET ? WHERE id_proveedor = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Proveedor WHERE id_proveedor = ?', [id]);
    }
}