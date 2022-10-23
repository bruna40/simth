import UserModel from '../models/UserModel';
import { User } from '../@types/Users';
import { Login } from '../@types/Login';

export default class UserService {
  static async register(user: User) {
    const users = await UserModel.create(user);
    return users;
  }

  static async findLogin(login: Login) {
    const users = await UserModel.getLogin(login);
    return users;
  }
}