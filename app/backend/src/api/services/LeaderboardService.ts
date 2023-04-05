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

  // O aluno Rafael Tourinho da turma 23 tribo B me ajudou com o fluxo 4 do projeto TFC.
  // Ele me mostrou como faze a busca pela associação e indicou a seção da documentação do sequelize
  // a respeito do de instâncias (https://sequelize.org/v3/docs/instances/#values-of-an-instance)
  // para que eu pudesse faciliar o processamento de dados.
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
    const resultValues = result.map((t: UnprocessedTeam) => t.get({ plain: true }));
    const processedResult = resultValues.map((t) => new LeaderboardFormatter(t));
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
    const resultValues = result.map((t: UnprocessedTeam) => t.get({ plain: true }));
    const processedResult = resultValues.map((t) => new LeaderboardFormatter(t));
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
    const resultValues = result.map((t: UnprocessedTeam) => t.get({ plain: true }));
    const processedResult = resultValues.map((t) => new LeaderboardFormatter(t));
    return descendingOrder(processedResult) as ProcessedTeam[];
  }
}
