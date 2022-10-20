import UserModel from '../models/UserModel';
import { User } from '../@types/Users';

export default class UserService {
  static async register(user: User) {
    const users = await UserModel.create(user);
    return users;
  }
}