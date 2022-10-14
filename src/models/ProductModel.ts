import { ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/Products';
import connection from './connection';

export default class ProductModel {
  static async getAll() {
    const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
    return products;
  }

  static async getById(id: number): Promise<any> {
    const query = 'SELECT * FROM Trybesmith.Products WHERE id = ?';
    const [products] = await connection.query<ResultSetHeader>(query, [id]);
    return products;
  }

  static async create(product: Omit<Product, 'id'>) {
    const [result] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );
    return { 
      id: result.insertId,
      ...result };
  }
}
