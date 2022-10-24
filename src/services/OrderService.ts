import OrdersModel from '../models/OrdersModel';
import validateProductOrder from '../middlewares/validateProductOrder';

export default class OrderService {
  static async getOrders() {
    const orders = await OrdersModel.getAll();
    return orders;
  }

  static async createOrder(id: number, productsIds: number[]) {
    const idsValidation = validateProductOrder(productsIds);

    if (idsValidation.type) {
      return idsValidation;
    }

    const orderId: number = await OrdersModel.create(id);
    
    return { type: null, message: orderId };
  }
}