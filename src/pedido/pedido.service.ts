import pool from '../config/database.config';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { OkPacket } from 'mysql2';

export class PedidoService {
    async create(createPedidoDto: CreatePedidoDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Pedido SET ?', createPedidoDto);
        return { id_pedido: result.insertId, ...createPedidoDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Pedido');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Pedido WHERE id_pedido = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreatePedidoDto>) {
        await pool.query('UPDATE Pedido SET ? WHERE id_pedido = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Pedido WHERE id_pedido = ?', [id]);
    }
}