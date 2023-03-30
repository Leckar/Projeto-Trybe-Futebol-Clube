import Match from '../../database/models/MatchModel';

export default interface IMatchService {
  getMatches(matchState: string): Promise<Match[]>;
  endMatch(id: string | number): Promise<void>;
}
