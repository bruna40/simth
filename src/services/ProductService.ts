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

  static async updateOrder(productsId: number[], orderId: number | string) {
    const products = await Promise.all(productsId.map(async (id) => {
      const product = await ProductModel.update(id, orderId);
      return product;
    }));

    return { type: null, message: products };
  }
}