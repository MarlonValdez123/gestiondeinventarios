import { Request, Response } from 'express';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

const categoriaService = new CategoriaService();

export class CategoriaController {
    async create(req: Request, res: Response) {
        const createCategoriaDto: CreateCategoriaDto = req.body;
        const categoria = await categoriaService.create(createCategoriaDto);
        res.status(201).json(categoria);
    }

    async findAll(req: Request, res: Response) {
        const categorias = await categoriaService.findAll();
        res.json(categorias);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const categoria = await categoriaService.findOne(id);
        res.json(categoria);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const categoria = await categoriaService.update(id, updateData);
        res.json(categoria);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await categoriaService.remove(id);
        res.status(204).send();
    }
}