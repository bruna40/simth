// import { sign } from 'jsonwebtoken';
// import { Request, Response } from 'express';
// import UserModel from '../models/UserModel';

// export default class LoginController {
//   static async login(req: Request, res: Response) {
//     const { username, password } = req.body;
//     const user = await UserModel.getLogin({username, password });
//     if (!user) return res.status(401).json({ message: 'Incorrect username or password' });
//     const token = sign({ id: user.id, name: user.username }, 'secret');
//     return res.status(200).json({ token });
//   }
// }