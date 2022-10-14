import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

router
  .get('/products', ProductController.getProducts)
  .post('/products', ProductController.createProduct);
export default router;