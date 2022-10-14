import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();

router
  .get('/', OrderController.getAll);

export default router;