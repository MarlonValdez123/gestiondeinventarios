import { Request, Response } from 'express';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';

const empresaService = new EmpresaService();

export class EmpresaController {
    async create(req: Request, res: Response) {
        const createEmpresaDto: CreateEmpresaDto = req.body;
        const empresa = await empresaService.create(createEmpresaDto);
        res.status(201).json(empresa);
    }

    async findAll(req: Request, res: Response) {
        const empresas = await empresaService.findAll();
        res.json(empresas);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const empresa = await empresaService.findOne(id);
        res.json(empresa);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const empresa = await empresaService.update(id, updateData);
        res.json(empresa);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await empresaService.remove(id);
        res.status(204).send();
    }
}