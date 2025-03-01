import { Request, Response } from 'express';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';

const pedidoService = new PedidoService();

export class PedidoController {
    async create(req: Request, res: Response) {
        const createPedidoDto: CreatePedidoDto = req.body;
        const pedido = await pedidoService.create(createPedidoDto);
        res.status(201).json(pedido);
    }

    async findAll(req: Request, res: Response) {
        const pedidos = await pedidoService.findAll();
        res.json(pedidos);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const pedido = await pedidoService.findOne(id);
        res.json(pedido);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const pedido = await pedidoService.update(id, updateData);
        res.json(pedido);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await pedidoService.remove(id);
        res.status(204).send();
    }
}