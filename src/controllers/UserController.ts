import { Request, Response } from 'express';
import UsersService from '../services/UserService';

class UserController {
  static async registerUser(req: Request, res: Response) {
    try {
      const user = await UsersService.register(req.body);
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default UserController;