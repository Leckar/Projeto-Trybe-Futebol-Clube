import { ModelStatic } from 'sequelize';

import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
import IMatchService from '../interfaces/IMatchService';

export default class MatchService implements IMatchService {
  private _model: ModelStatic<Match>;
  private _teamModel: ModelStatic<Team>;

  constructor() {
    this._model = Match;
    this._teamModel = Team;
  }

  async getMatches(matchState: string): Promise<Match[]> {
    const result = await this._model.findAll({
      include: [
        { model: this._teamModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: this._teamModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    switch (matchState) {
      case 'true':
        return result.filter(({ inProgress }) => inProgress === true) as Match[];
      case 'false':
        return result.filter(({ inProgress }) => inProgress === false) as Match[];
      default:
        break;
    }
    return result as Match[];
  }
}
