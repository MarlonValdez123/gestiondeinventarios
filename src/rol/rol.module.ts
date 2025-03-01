import { Router } from 'express';
import { RolController } from './rol.controller';

const router = Router();
const rolController = new RolController();

router.post('/', rolController.create.bind(rolController));
router.get('/', rolController.findAll.bind(rolController));
router.get('/:id', rolController.findOne.bind(rolController));
router.put('/:id', rolController.update.bind(rolController));
router.delete('/:id', rolController.remove.bind(rolController));

export default router;