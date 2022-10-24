import { Request, Response, NextFunction } from 'express';

export default function validateProductOrder(req: Request, res: Response, next: NextFunction) {
  const { ProductIds } = req.body;
  if (!ProductIds) {
    return res.status(400).json({ message: '"ProductIds" is required' });
  }
  if (!Array.isArray(ProductIds)) {
    return res.status(422).json({ message: '"ProductIds" must be an array' });
  }
  if (ProductIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
}