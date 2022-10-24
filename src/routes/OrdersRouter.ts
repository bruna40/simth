import express from 'express';
import OrderController from '../controllers/OrderController';
import validateOrders from '../middlewares/validateOrder';
import validateProductOrder from '../middlewares/validateProductOrder';

const router = express.Router();

router
  .get('/orders', OrderController.getAllOrders)
  .post('/orders', validateOrders, validateProductOrder, OrderController.registerOrder);

export default router;