import express from 'express';
import OrderController from '../controllers/OrderController';
import validateProductOrder from '../middlewares/validateProductOrder';
import validateOrders from '../middlewares/vallidateOrders';

const router = express.Router();

router
  .get('/orders', OrderController.getAllOrders)
  .post('/orders', validateOrders, validateProductOrder, OrderController.registerOrder);

export default router;