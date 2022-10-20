import { ResultSetHeader } from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { User } from '../@types/Users';
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
    const [result] = await connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users 
        (username, classe, level, password) VALUES (?,?,?,?)`,
      [
        user.username,
        user.classe,
        user.level,
        user.password,
      ],
    );
    return {
      token: await UserModel.token(result.insertId),
    };
  }
}

export default UserModel;