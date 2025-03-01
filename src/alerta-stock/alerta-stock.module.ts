import { Router } from 'express';
import { AlertaStockController } from './alerta-stock.controller';

const router = Router();
const alertaStockController = new AlertaStockController();

router.post('/', alertaStockController.create.bind(alertaStockController));
router.get('/', alertaStockController.findAll.bind(alertaStockController));
router.get('/:id', alertaStockController.findOne.bind(alertaStockController));
router.put('/:id', alertaStockController.update.bind(alertaStockController));
router.delete('/:id', alertaStockController.remove.bind(alertaStockController));

export default router;