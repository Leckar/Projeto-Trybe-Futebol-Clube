import { ProcessedTeam } from '../../types';

export default interface ILeaderboardService {
  getAll(): Promise<ProcessedTeam[]>,
  getAway(): Promise<ProcessedTeam[]>,
  getHome(): Promise<ProcessedTeam[]>,
}
