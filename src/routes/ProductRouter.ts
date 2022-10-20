import express from 'express';
import ProductController from '../controllers/ProductController';
import validateNameProduct from '../middlewares/validateNameProduct';
import validateAmountProduct from '../middlewares/validateAmountProduct';

const router = express.Router();

router
  .get('/products', ProductController.getProducts)
  .post('/products', validateNameProduct, validateAmountProduct, ProductController.createProduct);
export default router;