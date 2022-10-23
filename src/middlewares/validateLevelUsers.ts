import { Request, Response, NextFunction } from 'express';

export default function validateLevelUsers(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;
        
  if (!level) {
    return res.status(400).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  if (level < 1) {
    const teste = '"level" must be greater than or equal to 1';
    return res.status(422).json({ message: teste });
  }
        
  next();
}