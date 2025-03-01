import { Request, Response } from 'express';
import { ProveedorService } from './proveedor.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';

const proveedorService = new ProveedorService();

export class ProveedorController {
    async create(req: Request, res: Response) {
        const createProveedorDto: CreateProveedorDto = req.body;
        const proveedor = await proveedorService.create(createProveedorDto);
        res.status(201).json(proveedor);
    }

    async findAll(req: Request, res: Response) {
        const proveedores = await proveedorService.findAll();
        res.json(proveedores);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const proveedor = await proveedorService.findOne(id);
        res.json(proveedor);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const proveedor = await proveedorService.update(id, updateData);
        res.json(proveedor);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await proveedorService.remove(id);
        res.status(204).send();
    }
}