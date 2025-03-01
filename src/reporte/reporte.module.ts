import { Router } from 'express';
import { ReporteController } from './reporte.controller';

const router = Router();
const reporteController = new ReporteController();

router.post('/', reporteController.create.bind(reporteController));
router.get('/', reporteController.findAll.bind(reporteController));
router.get('/:id', reporteController.findOne.bind(reporteController));
router.put('/:id', reporteController.update.bind(reporteController));
router.delete('/:id', reporteController.remove.bind(reporteController));

export default router;