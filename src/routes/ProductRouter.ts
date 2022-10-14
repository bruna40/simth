import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();

router
  .get('/', ProductController.getProducts)
  .post('/', ProductController.createProduct);
export default router;