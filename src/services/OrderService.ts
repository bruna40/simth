import OrdersModel from '../models/OrdersModel';

export default class OrderService {
  static async getOrders() {
    const orders = await OrdersModel.getAll();
    return orders;
  }

  static async createOrder(userId: number): Promise<number> {
    const order = await OrdersModel.create(userId);
    return order;
  }
}