import pool from '../config/database.config';
import { CreateRolDto } from './dto/create-rol.dto';
import { OkPacket } from 'mysql2';

export class RolService {
    async create(createRolDto: CreateRolDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Rol SET ?', createRolDto);
        return { id_rol: result.insertId, ...createRolDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Rol');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Rol WHERE id_rol = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateRolDto>) {
        await pool.query('UPDATE Rol SET ? WHERE id_rol = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Rol WHERE id_rol = ?', [id]);
    }
}