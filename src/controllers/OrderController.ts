import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import DecodeToken from '../@types/DecodeToken';
import ProductService from '../services/ProductService';
import OrderService from '../services/OrderService';

export default class OrderController {
  static async getAllOrders(_req:Request, res:Response) {
    const orders = await OrderService.getOrders();
    res.status(200).json(orders);
  }

  static async registerOrder(req: Request, res: Response) {
    const { productsIds } = req.body;
    const { authorization } = req.headers;

    const { payload } = verify(authorization as string, 'secret') as DecodeToken;
    
    const userId = payload.id;

    const insertId = await OrderService.createOrder(userId);

    const product = await ProductService.updateOrder(productsIds, insertId);

    if ('message' in product) {
      return res.status(product.statusCode as number).json({ message: product.message });
    }

    res.status(201).json({ userId, productsIds });
  }
}