import { ResultSetHeader } from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import connection from './connection';
import { User } from '../interfaces/Users';

export default class UserModel {
  static async tokenJWT(id:number) {
    const token = jwt.sign({ id }, 'secret', { expiresIn: '1d' });
    return token;
  }

  static async createUser(user: User) {
    const [result] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [user.username, user.classe, user.level, user.password],
    );
    return { 
      token: await UserModel.tokenJWT(result.insertId),
    };
  }
}