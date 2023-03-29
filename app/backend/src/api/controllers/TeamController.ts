import { Request, Response } from 'express';

import ITeamService from '../interfaces/ITeamService';
import status from '../../utils/HttpStatuses';

const { ok, notFound } = status;

export default class TeamController {
  private _service: ITeamService;

  constructor(service: ITeamService) {
    this._service = service;
  }

  async get(_req: Request, res: Response) {
    const result = await this._service.getAll();
    res.status(ok).json(result);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.getById(id);
    if (result) return res.status(ok).json(result);
    res.status(notFound).json({ message: 'Invalid team id' });
  }
}
