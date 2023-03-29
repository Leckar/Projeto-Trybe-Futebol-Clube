import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import ITeamService from '../interfaces/ITeamService';

export default class TeamService implements ITeamService {
  private _model: ModelStatic<Team>;

  constructor() {
    this._model = Team;
  }

  async getAll(): Promise<Team[]> {
    const result = await this._model.findAll();
    return result as Team[];
  }

  async getById(id: string): Promise<Team | null> {
    // if (Number.isNaN(id)) {
    //   throw new Error();
    // }
    const result = await this._model.findByPk(id);
    return result;
  }
}
