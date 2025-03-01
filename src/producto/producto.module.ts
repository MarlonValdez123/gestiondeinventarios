import { Router } from 'express';
import { ProductoController } from './producto.controller';

const router = Router();
const productoController = new ProductoController();

router.post('/', productoController.create.bind(productoController));
router.get('/', productoController.findAll.bind(productoController));
router.get('/:id', productoController.findOne.bind(productoController));
router.put('/:id', productoController.update.bind(productoController));
router.delete('/:id', productoController.remove.bind(productoController));

export default router;