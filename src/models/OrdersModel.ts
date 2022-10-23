import { ResultSetHeader } from 'mysql2';
import { Orders } from '../@types/Orders';
import connection from './connection';

class OrderModel {
  static async getAll() {
    const [orders] = await connection.execute(`
        SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) as productsIds
        FROM Trybesmith.Orders as orders
        INNER JOIN Trybesmith.Products as products
        ON orders.id = products.orderId
        GROUP BY orders.id
        ORDER BY orders.userId;`);

    return orders as Orders[];
  }

  static async create(userId: number) {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );

    return insertId;
  }
}

export default OrderModel;