import { Request, Response } from 'express';
import ProductsService from '../services/ProductService';

class ProductsController {
  static async getProducts(req: Request, res: Response) {
    try {
      const products = await ProductsService.get();
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async createProduct(req: Request, res: Response) {
    const productCreated = await ProductsService.register(req.body);
    return res.status(201).send(productCreated);
  }
}

export default ProductsController;