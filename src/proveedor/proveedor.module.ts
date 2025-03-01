import { Router } from 'express';
import { ProveedorController } from './proveedor.controller';

const router = Router();
const proveedorController = new ProveedorController();

router.post('/', proveedorController.create.bind(proveedorController));
router.get('/', proveedorController.findAll.bind(proveedorController));
router.get('/:id', proveedorController.findOne.bind(proveedorController));
router.put('/:id', proveedorController.update.bind(proveedorController));
router.delete('/:id', proveedorController.remove.bind(proveedorController));

export default router;