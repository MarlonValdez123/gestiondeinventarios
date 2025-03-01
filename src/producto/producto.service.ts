import pool from '../config/database.config';
import { CreateProductoDto } from './dto/create-producto.dto';
import { OkPacket } from 'mysql2';

export class ProductoService {
    async create(createProductoDto: CreateProductoDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Producto SET ?', createProductoDto);
        return { id_producto: result.insertId, ...createProductoDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Producto');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Producto WHERE id_producto = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateProductoDto>) {
        await pool.query('UPDATE Producto SET ? WHERE id_producto = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Producto WHERE id_producto = ?', [id]);
    }
}