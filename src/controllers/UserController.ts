import { Request, Response } from 'express';
import UsersService from '../services/UserService';

class UserController {
  static async registerUser(req: Request, res: Response) {
    const result = await UsersService.register(req.body);
    res.status(201).send(result);
  }
}

export default UserController;