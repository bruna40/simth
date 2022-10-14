import { Request, Response } from 'express';
import ProductsService from '../services/ProductService';
import ProductModel from '../models/ProductModel';

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
    try {
      const productCreated = await ProductModel.create(req.body);
      res.status(201).send(productCreated);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default ProductsController;