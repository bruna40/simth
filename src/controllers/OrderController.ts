import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  static async getAllOrders(_req:Request, res:Response) {
    const orders = await OrderService.getOrders();
    res.status(200).json(orders);
  }
}