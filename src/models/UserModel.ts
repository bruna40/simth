import { ResultSetHeader } from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { User } from '../@types/Users';
import { Login } from '../@types/Login';
import connection from './connection';
import auth from '../middlewares/auth';

class UserModel {
  static async getAll() {
    const [result] = await connection.execute<ResultSetHeader>('SELECT * FROM Trybesmith.Users');
    return result;
  }

  static async getById(id: number) {
    const [result] = await connection.execute<ResultSetHeader>(`SELECT * FROM Trybesmith.Users 
      WHERE id = ?`, [id]);
    return result;
  }

  static async token(id: number) {
    const token = jwt.sign({ id }, auth.secret, {
      expiresIn: auth.expires,
    });
    
    return token;
  }

  static async create(user: User) {
    const query = `INSERT INTO Trybesmith.Users 
        (username, classe, level, password) VALUES (?,?,?,?)`;
    const [result] = await connection.query<ResultSetHeader>(query, [
      user.username,
      user.classe,
      user.level,
      user.password,
    ]);
    return {
      token: await UserModel.token(result.insertId),
    };
  }

  static async getLogin({ username, password }: Login) {
    const [result] = await connection.execute<ResultSetHeader>(`SELECT * FROM Trybesmith.Users 
      WHERE username = ? AND password = ?`, [username, password]);
    return result;
  }
}

export default UserModel;