import { Request, Response } from 'express';
import UsersService from '../services/UserService';

class UserController {
  static async registerUser(req: Request, res: Response) {
    const { level } = req.body;
    if (level <= 0) {
      return res.status(422).json({ 
        message: '"level" must be greater than or equal to 1',
      });
    }
    const result = await UsersService.register(req.body);
    res.status(201).send(result);
  }
}

export default UserController;