import { Router } from 'express';
import { UsuarioController } from './usuario.controller';

const router = Router();
const usuarioController = new UsuarioController();

router.post('/', usuarioController.create.bind(usuarioController));
router.get('/', usuarioController.findAll.bind(usuarioController));
router.get('/:id', usuarioController.findOne.bind(usuarioController));
router.put('/:id', usuarioController.update.bind(usuarioController));
router.delete('/:id', usuarioController.remove.bind(usuarioController));

export default router;