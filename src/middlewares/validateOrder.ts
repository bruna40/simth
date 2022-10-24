import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import DecodeToken from '../@types/DecodeToken';
import UserModel from '../models/UserModel';

export default async function validateOrders(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try { 
    const { payload } = verify(authorization as string, 'secret') as DecodeToken;
    const [user] = await UserModel.getById(payload.id);
    if (user) {
      next();
    }
  } catch (err) {   
    return res.status(401).json({ message: 'Invalid token' });
  }
}