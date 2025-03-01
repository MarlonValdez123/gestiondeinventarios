import { Request, Response } from 'express';
import { ReporteService } from './reporte.service';
import { CreateReporteDto } from './dto/create-reporte.dto';

const reporteService = new ReporteService();

export class ReporteController {
    async create(req: Request, res: Response) {
        const createReporteDto: CreateReporteDto = req.body;
        const reporte = await reporteService.create(createReporteDto);
        res.status(201).json(reporte);
    }

    async findAll(req: Request, res: Response) {
        const reportes = await reporteService.findAll();
        res.json(reportes);
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const reporte = await reporteService.findOne(id);
        res.json(reporte);
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const reporte = await reporteService.update(id, updateData);
        res.json(reporte);
    }

    async remove(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await reporteService.remove(id);
        res.status(204).send();
    }
}