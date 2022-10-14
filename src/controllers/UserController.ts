import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

class UserController {
  static async registerUser(req: Request, res: Response) {
    const result = await UserModel.create(req.body);
    res.status(201).send(result);
  }
}

export default UserController;