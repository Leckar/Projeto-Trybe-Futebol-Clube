import { Request, Response } from 'express';

import IMatchService from '../interfaces/IMatchService';
import status from '../../utils/HttpStatuses';

const {
  ok,
  created,
  unprocessableEntity,
  notFound,
} = status;

export default class MatchController {
  private _service: IMatchService;

  constructor(match: IMatchService) {
    this._service = match;
  }

  // async createMatch(req: Request, res: Response): Promise<Response | void> {
  //   const data = req.body;
  //   const result = await this._service.create(data);
  //   if (result.message) {
  //     switch (result.message) {
  //       case 'duplicate':
  //         return res.status(unprocessableEntity)
  //           .json({ message: 'It is not possible to create a match with two equal teams' });
  //       case 'invalid':
  //         return res.status(notFound)
  //           .json({ message: 'There is no team with such id!' });
  //       default:
  //         break;
  //     }
  //   }
  //   res.status(created).json('test');
  // }

  async editMatch(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    const data = req.body;
    await this._service.editMatch(id, data);
    res.status(ok).json({ message: 'Finished' });
  }

  async endMatch(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    this._service.endMatch(id);
    res.status(ok).json({ message: 'Finished' });
  }

  async getMatches(req: Request, res: Response): Promise<void> {
    const { inProgress } = req.query;
    const matches = await this._service.getMatches(inProgress as string);
    res.status(ok).json(matches);
  }
}
