import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces/Users';
import tokenJWT from '../utils/tokenJWT';

export default class UserModel {
  static async createUser(user: User) {
    const [result] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [user.username, user.classe, user.level, user.password],
    );
    return { 
      token: tokenJWT(result.insertId),
    };
  }
}