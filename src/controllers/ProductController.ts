import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  static async getProducts(request: Request, response: Response) {
    const products = await ProductService.get();
    response.status(200).json(products);
  }

  static async createProduct(request: Request, response: Response) {
    try {
      const product = await ProductService.create(request.body);
      response.status(201).send(product);
    } catch (error) {
      response.status(500).send(error);
    }
  }
}
export default ProductController;