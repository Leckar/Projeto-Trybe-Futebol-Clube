import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import ITeamService from '../interfaces/ITeamService';

export default class TeamService implements ITeamService {
  protected model: ModelStatic<Team> = Team;

  async getAll(): Promise<Team[]> {
    const result = await this.model.findAll();
    return result as Team[];
  }
}
