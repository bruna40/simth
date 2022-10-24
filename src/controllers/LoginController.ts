import { sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class LoginController {
  static async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const [user] = await UserService.login({ username, password });
    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const token = sign({ id: user.id, name: user.username }, 'secret');
    return res.status(200).json({ token });
  }
}