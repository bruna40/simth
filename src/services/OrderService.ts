import OrdersModel from '../models/OrdersModel';

export default class OrderService {
  static async getOrders() {
    const orders = await OrdersModel.getAll();
    return orders;
  }
}