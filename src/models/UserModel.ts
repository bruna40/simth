import { ResultSetHeader } from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import connection from './connection';
import { User } from '../interfaces/Users';

export default class UserModel {
  static async tokenJWT(id:number) {
    const token = jwt.sign({ id }, String(process.env.JWT_SECRET), { expiresIn: '1d' });
    return token;
  }

  static async createUser(user: User) {
    const query = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) VALUES (?,?,?,?)`;
    const [result] = await connection.query<ResultSetHeader>(query, [
      user.username,
      user.classe,
      user.level,
      user.password,
    ]);
    return {
      token: await UserModel.tokenJWT(result.insertId),
    };
  }
}