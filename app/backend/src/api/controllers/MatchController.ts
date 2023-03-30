import { Request, Response } from 'express';

import IMatchService from '../interfaces/IMatchService';
import status from '../../utils/HttpStatuses';

const { ok } = status;

export default class MatchController {
  private _service: IMatchService;

  constructor(match: IMatchService) {
    this._service = match;
  }

  async getMatches(req: Request, res: Response): Promise<void> {
    const { inProgress } = req.query;
    const matches = await this._service.getMatches(inProgress as string);
    res.status(ok).json(matches);
  }
}
