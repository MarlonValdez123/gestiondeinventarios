import { Request, Response } from 'express';
import { AlertaStockService } from './alerta-stock.service';
import { CreateAlertaStockDto } from './dto/create-alerta-stock.dto';

const alertaStockService = new AlertaStockService();

export class AlertaStockController {
    async create(req: Request, res: Response) {
        const createAlertaStockDto: CreateAlertaStockDto = req.body;
        const alertaStock = await alertaStockService.create(createAlertaStockDto);
        res.status(201).json(alertaStock);
    }

    async findAll(req: Request, res: Response) {
        const alertasStock = await alertaStockService.findAll();
        res.json(alertasStock);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const alertaStock = await alertaStockService.findOne(id);
        res.json(alertaStock);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const alertaStock = await alertaStockService.update(id, updateData);
        res.json(alertaStock);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await alertaStockService.remove(id);
        res.status(204).send();
    }
}