import { Request, Response } from 'express';

import IUserService from '../interfaces/IUserService';
import status from '../../utils/HttpStatuses';

const { ok, unauthorized, badRequest } = status;

export default class UserController {
  private _service: IUserService;

  constructor(service: IUserService) {
    this._service = service;
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(badRequest).json({ message: 'All fields must be filled' });
    }
    // const dto = req.body;
    const token = await this._service.login({ email, password });
    if (token) return res.status(ok).json({ token });
    return res.status(unauthorized).json({ message: 'Invalid email or password' });
  }

  async roleConfirmation(req: Request, res: Response) {
    const { payload } = req.body;
    const role = await this._service.roleFetch(payload);
    res.status(ok).json({ role });
  }
}
