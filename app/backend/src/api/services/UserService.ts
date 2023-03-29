import { ModelStatic } from 'sequelize';
import { compareSync } from 'bcryptjs';

import { LoginCredentials } from '../../types';
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
    if (!loginValidation(dto)) return null;
    const [result] = await this._model.findAll({ where: { email } });
    if (result && compareSync(password, result.password)) {
      const { username, role, id } = result;
      return generateToken({ username, role, id });
    }
    return null;
  }
}
