import connection from './connection';
import { Orders } from '../interfaces/Orders';

export default class OrdersModel {
  static async getOrders() {
    const query = `SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.Orders as orders
    INNER JOIN Trybesmith.Products as products
    ON orders.id = products.orderId
    GROUP BY orders.id
    ORDER BY orders.userId;`;
    const [orders] = await connection.query(query);
    return orders as Orders[];
  }
}