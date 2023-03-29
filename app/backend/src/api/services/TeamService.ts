import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import ITeamService from '../interfaces/ITeamService';

export default class TeamService implements ITeamService {
  private model: ModelStatic<Team> = Team;

  async getAll(): Promise<Team[]> {
    const result = await this.model.findAll();
    return result as Team[];
  }

  async getById(id: string): Promise<Team | null> {
    // if (Number.isNaN(id)) {
    //   throw new Error();
    // }
    const result = await this.model.findByPk(id);
    return result;
  }
}
