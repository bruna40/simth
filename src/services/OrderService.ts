import OrdersModel from '../models/OrdersModel';

export default class OrderService {
  static async getOrders() {
    const orders = await OrdersModel.getOrders();
    return orders;
  }
}