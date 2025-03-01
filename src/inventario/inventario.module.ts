import { Router } from 'express';
import { InventarioController } from './inventario.controller';

const router = Router();
const inventarioController = new InventarioController();

router.post('/', inventarioController.create.bind(inventarioController));
router.get('/', inventarioController.findAll.bind(inventarioController));
router.get('/:id', inventarioController.findOne.bind(inventarioController));
router.put('/:id', inventarioController.update.bind(inventarioController));
router.delete('/:id', inventarioController.remove.bind(inventarioController));

export default router;