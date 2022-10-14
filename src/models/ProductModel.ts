import { ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/Products';
import connection from './connection';

class ProductsRoute {
  static async getAll() {
    const [products] = await connection.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.Products',
    );
    return products;
  }

  static async create(product: Omit<Product, 'id'>) {
    const [result] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );
    return {
      id: result.insertId,
      ...result,
    };
  }
}

export default ProductsRoute;