import express from 'express';
import OrderController from '../controllers/OrderController';

const router = express.Router();

router
  .get('/orders', OrderController.getAllOrders)
  .post('/orders', OrderController.registerOrder);

export default router;