import { Router } from 'express';
import { CategoriaController } from './categoria.controller';

const router = Router();
const categoriaController = new CategoriaController();

router.post('/', categoriaController.create.bind(categoriaController));
router.get('/', categoriaController.findAll.bind(categoriaController));
router.get('/:id', categoriaController.findOne.bind(categoriaController));
router.put('/:id', categoriaController.update.bind(categoriaController));
router.delete('/:id', categoriaController.remove.bind(categoriaController));

export default router;