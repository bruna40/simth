import ProductModel from '../models/ProductModel';
import { Product } from '../@types/Products';

export default class ProductService {
  static async get() {
    const products = await ProductModel.getAll();
    return products;
  }

  static async register(product: Product) {
    const products = await ProductModel.create(product);
    return products;
  }

  static async update(productId: number, orderId: number) {
    const products = await ProductModel.update(productId, orderId);
    return products;
  }
}