import pool from '../config/database.config';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { OkPacket } from 'mysql2';

export class EmpresaService {
    async create(createEmpresaDto: CreateEmpresaDto) {
        const [result] = await pool.query<OkPacket>('INSERT INTO Empresa SET ?', createEmpresaDto);
        return { id_empresa: result.insertId, ...createEmpresaDto };
    }

    async findAll() {
        const [rows] = await pool.query('SELECT * FROM Empresa');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await pool.query('SELECT * FROM Empresa WHERE id_empresa = ?', [id]);
        return rows[0];
    }

    async update(id: number, updateData: Partial<CreateEmpresaDto>) {
        await pool.query('UPDATE Empresa SET ? WHERE id_empresa = ?', [updateData, id]);
        return this.findOne(id);
    }

    async remove(id: number) {
        await pool.query('DELETE FROM Empresa WHERE id_empresa = ?', [id]);
    }
}