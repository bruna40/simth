import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  static async getProducts(request: Request, response: Response) {
    const products = await ProductService.get();
    response.status(200).json(products);
  }

  static async createProduct(req: Request, res: Response) {
    try {
      const productCreated = await ProductService.create(req.body);
      res.status(201).send(productCreated);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
export default ProductController;