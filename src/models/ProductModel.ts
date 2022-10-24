import { ResultSetHeader } from 'mysql2/promise';
import { Product } from '../@types/Products';
import connection from './connection';

class ProductsRoute {
  static async getAll() {
    const [products] = await connection.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.Products',
    );
    return products;
  }

  static async create({ name, amount }: Product): Promise<Product> {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, name, amount };
  }

  static async update(productId: number, orderId:number | string) {
    await connection.execute(
      'UPDATE Trybesmith.Products SET orderId=(?) WHERE id=(?);',
      [orderId, productId],
    );
    return productId;
  }
}

export default ProductsRoute;