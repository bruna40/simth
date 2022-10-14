import UserModel from '../models/UserModel';
import { User } from '../interfaces/Users';

export default class UserService {
  static async register(user: User) {
    const users = await UserModel.createUser(user);
    return users;
  }
}