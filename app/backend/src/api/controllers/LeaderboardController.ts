import { Request, Response } from 'express';

import ILeaderboardService from '../interfaces/ILeaderboardService';
import status from '../../utils/HttpStatuses';

const {
  ok,
} = status;

export default class LeaderboardController {
  private _service: ILeaderboardService;

  constructor(service: ILeaderboardService) {
    this._service = service;
  }

  async getLeaderboard(_req: Request, res: Response): Promise<void> {
    const leaderboard = await this._service.getAll();
    res.status(ok).json(leaderboard);
  }

  async getHomeLeaderboard(_req: Request, res: Response): Promise<void> {
    const leaderboard = await this._service.getHome();
    res.status(ok).json(leaderboard);
  }

  async getAwayLeaderboard(_req: Request, res: Response): Promise<void> {
    const leaderboard = await this._service.getAway();
    res.status(ok).json(leaderboard);
  }
}
