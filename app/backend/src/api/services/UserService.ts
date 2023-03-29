import { ModelStatic } from 'sequelize';
import { compareSync } from 'bcryptjs';

import { LoginCredentials, Payload } from '../../types';
import User from '../../database/models/UserModel';
import IUserService from '../interfaces/IUserService';
import { generateToken } from '../../auth/JWT';
import loginValidation from './validations/LoginValidation';

export default class UserService implements IUserService {
  private _model: ModelStatic<User>;

  constructor() {
    this._model = User;
  }

  async login(dto: LoginCredentials): Promise<string | null> {
    const { email, password } = dto;
    if (!loginValidation({ email, password })) return null;
    const [result] = await this._model.findAll({ where: { email } });
    if (result && compareSync(password, result.password)) {
      const { username } = result;
      return generateToken({ username });
    }
    return null;
  }

  async roleFetch(payload: Payload): Promise<string> {
    const { username } = payload;
    const [result] = await this._model.findAll({ where: { username } });
    return result.role;
  }
}
