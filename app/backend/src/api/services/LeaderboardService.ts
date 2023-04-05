import { ModelStatic } from 'sequelize';

import Team from '../../database/models/TeamModel';
import { ProcessedTeam, UnprocessedTeam } from '../../types';
import ILeaderboardService from '../interfaces/ILeaderboardService';
import LeaderboardFormatter from '../../utils/LeaderboardTeamFormatter';
import descendingOrder from '../../utils/LeaderboardSort';

export default class LeaderboardService implements ILeaderboardService {
  private _model: ModelStatic<Team>;

  constructor() {
    this._model = Team;
  }

  // O aluno Rafael Tourinho da turma 23 tribo B me ajudou com a função getAll do projeto TFC.
  // Ele me indicou esse método para fazer a busca com as associações e indicou a seção da documentação do sequelize
  // a respeito do método get de instâncias (https://sequelize.org/v3/docs/instances/#values-of-an-instance)
  // para leitura.
  async getAll(): Promise<ProcessedTeam[]> {
    const result = await this._model.findAll({
      include: [
        {
          association: 'homeMatches',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: { inProgress: false } },
        {
          association: 'awayMatches',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: { inProgress: false } },
      ],
    }) as UnprocessedTeam[];
    const processedResult = result.map((t) => new LeaderboardFormatter(t));
    return descendingOrder(processedResult) as ProcessedTeam[];
  }

  async getAway(): Promise<ProcessedTeam[]> {
    const result = await this._model.findAll({
      include: [
        {
          association: 'awayMatches',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: { inProgress: false } },
      ],
    }) as UnprocessedTeam[];
    const processedResult = result.map((t) => new LeaderboardFormatter(t));
    return descendingOrder(processedResult) as ProcessedTeam[];
  }

  async getHome(): Promise<ProcessedTeam[]> {
    const result = await this._model.findAll({
      include: [
        {
          association: 'homeMatches',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: { inProgress: false } },
      ],
    }) as UnprocessedTeam[];
    const processedResult = result.map((t) => new LeaderboardFormatter(t));
    return descendingOrder(processedResult) as ProcessedTeam[];
  }
}
