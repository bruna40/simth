import ProductModel from '../models/ProductModel';
import { Product } from '../interfaces/Products';

export default class ProductService {
  static async get() {
    const products = await ProductModel.getAll();
    return products;
  }

  static async create(product: Omit<Product, 'id'>) {
    const products = await ProductModel.create(product);
    return products;
  }
}