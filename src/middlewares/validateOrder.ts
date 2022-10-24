import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default async function validateOrders(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    verify(authorization as string, process.env.JWT_SECRET as string);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}