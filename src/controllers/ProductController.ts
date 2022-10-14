import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  static async getProducts(request: Request, response: Response) {
    const products = await ProductService.get();
    response.status(200).json(products);
  }

  static async createProduct(request: Request, response: Response) {
    const product = await ProductService.create(request.body);
    response.status(201).json(product);
  }
}
export default ProductController;