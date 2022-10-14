import { Request, Response } from 'express';
import UsersService from '../services/UserService';

class UserController {
  static async registerUser(req: Request, res: Response) {
    const user = await UsersService.register(req.body);
    res.status(201).json(user);
  }
}

export default UserController;