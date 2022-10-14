import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  static async registerUser(req: Request, res: Response) {
    const user = await UserService.register(req.body);
    return res.status(201).json(user);
  }
}

export default UserController;