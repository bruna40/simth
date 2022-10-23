import OrdersModel from '../models/OrdersModel';

export default class OrderService {
  static async getOrders() {
    const orders = await OrdersModel.getAll();
    return orders;
  }

  static async createOrder(userId: number) {
    const orderId = await OrdersModel.create(userId);
    return orderId;
  }
}