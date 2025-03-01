import { Router } from 'express';
import { PedidoController } from './pedido.controller';

const router = Router();
const pedidoController = new PedidoController();

router.post('/', pedidoController.create.bind(pedidoController));
router.get('/', pedidoController.findAll.bind(pedidoController));
router.get('/:id', pedidoController.findOne.bind(pedidoController));
router.put('/:id', pedidoController.update.bind(pedidoController));
router.delete('/:id', pedidoController.remove.bind(pedidoController));

export default router;