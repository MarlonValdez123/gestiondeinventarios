import { Request, Response } from 'express';
import { InventarioService } from './inventario.service';
import { CreateInventarioDto } from './dto/create-inventario.dto';

const inventarioService = new InventarioService();

export class InventarioController {
    async create(req: Request, res: Response) {
        const createInventarioDto: CreateInventarioDto = req.body;
        const inventario = await inventarioService.create(createInventarioDto);
        res.status(201).json(inventario);
    }

    async findAll(req: Request, res: Response) {
        const inventarios = await inventarioService.findAll();
        res.json(inventarios);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const inventario = await inventarioService.findOne(id);
        res.json(inventario);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const inventario = await inventarioService.update(id, updateData);
        res.json(inventario);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await inventarioService.remove(id);
        res.status(204).send();
    }
}