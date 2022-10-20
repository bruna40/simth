import { ResultSetHeader } from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { User } from '../@types/Users';
import connection from './connection';
import auth from '../middlewares/auth';

class UserModel {
  static async getAll() {
    const query = 'SELECT * FROM Trybesmith.Users';
    const [result] = await connection.query<ResultSetHeader>(query);
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
      ...result,
    };
  }
}

export default UserModel;