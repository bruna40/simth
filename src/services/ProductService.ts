import ProductModel from '../models/ProductModel';
import { Product } from '../@types/Products';
import Message from '../@types/Message';

export default class ProductService {
  static async get() {
    const products = await ProductModel.getAll();
    return products;
  }

  static async register(product: Product) {
    const products = await ProductModel.create(product);
    return products;
  }

  static async validateOrder(productsId: number) {
    if (!productsId) return { statusCode: 400, message: '"productsIds" is required' };
    if (!Array.isArray(productsId)) {
      return { statusCode: 422, message: '"productsIds" must be an array' };
    }
    if (!productsId.length) {
      return { statusCode: 422, message: '"productsIds" must include only numbers' };
    }
  }

  static async updateOrder(productsId: number[], orderId: number): Promise<number[]> {
    const productsIds = await Promise.all(productsId.map(async (id) => {
      const productId = await ProductModel.update(id, orderId);
      return productId;
    }));

    return productsIds;
  }
}