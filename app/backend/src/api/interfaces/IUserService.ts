import { LoginCredentials } from '../../types';
import User from '../../database/models/UserModel';

export default interface IUserService {
  getAll(dto: LoginCredentials): Promise<User | null>;
}
