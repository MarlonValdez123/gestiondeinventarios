import { Request, Response } from 'express';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';

const productoService = new ProductoService();

export class ProductoController {
    async create(req: Request, res: Response) {
        const createProductoDto: CreateProductoDto = req.body;
        const producto = await productoService.create(createProductoDto);
        res.status(201).json(producto);
    }

    async findAll(req: Request, res: Response) {
        const productos = await productoService.findAll();
        res.json(productos);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const producto = await productoService.findOne(id);
        res.json(producto);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const producto = await productoService.update(id, updateData);
        res.json(producto);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await productoService.remove(id);
        res.status(204).send();
    }
}