import { Router } from 'express';
import { EmpresaController } from './empresa.controller';

const router = Router();
const empresaController = new EmpresaController();

router.post('/', empresaController.create.bind(empresaController));
router.get('/', empresaController.findAll.bind(empresaController));
router.get('/:id', empresaController.findOne.bind(empresaController));
router.put('/:id', empresaController.update.bind(empresaController));
router.delete('/:id', empresaController.remove.bind(empresaController));

export default router;