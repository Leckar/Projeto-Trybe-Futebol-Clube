import { editMatchData, newMatchData } from '../../types';
import Match from '../../database/models/MatchModel';

export default interface IMatchService {
  getMatches(matchState: string): Promise<Match[]>;
  endMatch(id: string | number): Promise<void>;
  editMatch(id: string | number, data: editMatchData): Promise<void>;
  create(data: newMatchData): Promise<Match | string>;
}
