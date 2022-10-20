import express from 'express';
import ProductController from '../controllers/ProductController';
import validateNameProduct from '../middlewares/validateNameProduct';
import validateAmountProduct from '../middlewares/validateAmountProduct';

const router = express.Router();

router
  .post('/products', validateNameProduct, validateAmountProduct, ProductController.createProduct)
  .get('/products', ProductController.getProducts);
  
export default router;