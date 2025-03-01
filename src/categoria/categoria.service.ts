import pool from '../config/database.config';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { OkPacket } from 'mysql2';

export class CategoriaService {
    async create(createCategoriaDto: CreateCategoriaDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Categoria SET ?', createCategoriaDto);
        return { id_categoria: result.insertId, ...createCategoriaDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Categoria');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Categoria WHERE id_categoria = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateCategoriaDto>) {
        await pool.query('UPDATE Categoria SET ? WHERE id_categoria = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Categoria WHERE id_categoria = ?', [id]);
    }
}