import express from 'express';
import OrderController from '../controllers/OrderController';
// import validateOrders from '../middlewares/vallidateOrders';

const router = express.Router();

router
  .get('/orders', OrderController.getAllOrders);
// .post('/orders', validateOrders, OrderController.registerOrder);

export default router;