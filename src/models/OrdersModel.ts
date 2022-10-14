import { Orders } from '../interfaces/Orders';
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
}

export default OrderModel;