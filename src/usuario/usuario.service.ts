import pool from '../config/database.config';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { OkPacket } from 'mysql2';

export class UsuarioService {
    async create(createUsuarioDto: CreateUsuarioDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Usuario SET ?', createUsuarioDto);
        return { id_usuario: result.insertId, ...createUsuarioDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Usuario');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Usuario WHERE id_usuario = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateUsuarioDto>) {
        await pool.query('UPDATE Usuario SET ? WHERE id_usuario = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Usuario WHERE id_usuario = ?', [id]);
    }
}