import { Router } from 'express';
import { MovimientoController } from './movimiento.controller';

const router = Router();
const movimientoController = new MovimientoController();

router.post('/', movimientoController.create.bind(movimientoController));
router.get('/', movimientoController.findAll.bind(movimientoController));
router.get('/:id', movimientoController.findOne.bind(movimientoController));
router.put('/:id', movimientoController.update.bind(movimientoController));
router.delete('/:id', movimientoController.remove.bind(movimientoController));

export default router;