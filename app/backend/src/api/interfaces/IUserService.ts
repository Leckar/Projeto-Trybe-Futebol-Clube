import { LoginCredentials, Payload } from '../../types';

export default interface IUserService {
  login(dto: LoginCredentials): Promise<string | null>;
  roleFetch(payload: Payload): Promise<string>;
}
