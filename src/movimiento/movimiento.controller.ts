import { Request, Response } from 'express';
import { MovimientoService } from './movimiento.service';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';

const movimientoService = new MovimientoService();

export class MovimientoController {
    async create(req: Request, res: Response) {
        const createMovimientoDto: CreateMovimientoDto = req.body;
        const movimiento = await movimientoService.create(createMovimientoDto);
        res.status(201).json(movimiento);
    }

    async findAll(req: Request, res: Response) {
        const movimientos = await movimientoService.findAll();
        res.json(movimientos);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const movimiento = await movimientoService.findOne(id);
        res.json(movimiento);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const movimiento = await movimientoService.update(id, updateData);
        res.json(movimiento);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await movimientoService.remove(id);
        res.status(204).send();
    }
}