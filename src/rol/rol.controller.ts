import { Request, Response } from 'express';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';

const rolService = new RolService();

export class RolController {
    async create(req: Request, res: Response) {
        const createRolDto: CreateRolDto = req.body;
        const rol = await rolService.create(createRolDto);
        res.status(201).json(rol);
    }

    async findAll(req: Request, res: Response) {
        const roles = await rolService.findAll();
        res.json(roles);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const rol = await rolService.findOne(id);
        res.json(rol);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const rol = await rolService.update(id, updateData);
        res.json(rol);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await rolService.remove(id);
        res.status(204).send();
    }
}