import { LoginCredentials } from '../../types';

export default interface IUserService {
  login(dto: LoginCredentials): Promise<string | null>;
}
