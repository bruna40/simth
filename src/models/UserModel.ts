import { ResultSetHeader } from 'mysql2/promise';
import { User } from '../@types/Users';
import connection from './connection';
import { Login } from '../@types/Login';
import generateToken from '../services/generateToken';

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

  static async create({ username, classe, level, password }: User): Promise<string> {
    await connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users 
        (username, classe, level, password) VALUES (?,?,?,?)`,
      [
        username,
        classe,
        level,
        password,
      ],
    );
    const token = generateToken({ username });
    return token;
  }

  static async getLogin({ username, password }: Login) {
    const [result] = await connection.execute<ResultSetHeader>(`SELECT * FROM Trybesmith.Users 
      WHERE username = ? AND password = ?`, [username, password]);
    return result;
  }
}

export default UserModel;