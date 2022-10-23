import { Request, Response, NextFunction } from 'express';

export default function validateLevelUsers(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;
        
  if (!level) {
    return res.status(400).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
        
  next();
}