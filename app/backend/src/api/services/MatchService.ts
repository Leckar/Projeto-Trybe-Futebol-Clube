import { ModelStatic } from 'sequelize';

import { editMatchData, newMatchData } from '../../types';
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

  async create(data: newMatchData): Promise<string | Match> {
    const { homeTeamId, awayTeamId } = data;
    if (homeTeamId === awayTeamId) return 'duplicate';
    const validateHomeTeam = await this._teamModel.findByPk(homeTeamId);
    const validateAwayTeam = await this._teamModel.findByPk(awayTeamId);
    if (!validateHomeTeam || !validateAwayTeam) return 'invalid';
    const result = await this._model.create({ ...data, inProgress: true });
    return result as Match;
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

  async endMatch(id: string | number): Promise<void> {
    await this._model.update({ inProgress: false }, { where: { id } });
  }

  async editMatch(id: string | number, data: editMatchData): Promise<void> {
    this._model.update(data, { where: { id } });
  }
}
