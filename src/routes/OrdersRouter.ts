import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();

router
  .get('/orders', OrderController.getAllOrders);

export default router;