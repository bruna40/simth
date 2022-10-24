import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import DecodeToken from '../@types/DecodeToken';
import OrderService from '../services/OrderService';

export default class OrderController {
  static async getAllOrders(_req:Request, res:Response) {
    const orders = await OrderService.getOrders();
    res.status(200).json(orders);
  }

  static async registerOrder(req:Request, res:Response) {
    const { productsIds } = req.body;
    const { authorization } = req.headers;

    const { payload } = verify(authorization as string, 'secret') as DecodeToken;
    const userId = payload.id;

    const insertId = await OrderService.createOrder(userId);

    return res.status(201).json({ insertId, productsIds });
  }
}