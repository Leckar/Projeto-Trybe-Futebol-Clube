import Team from '../database/models/TeamModel';

export type Payload = {
  username: string,
};

export type LoginCredentials = {
  email: string,
  password: string,
};

export type Match = {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
};

export type editMatchData = {
  homeTeamGoals: number,
  awayTeamGoals: number,
};

export type newMatchData = {
  homeTeamId: number,
  awayTeamId: number,
} & editMatchData;

export type UnprocessedTeam = {
  homeMatches?: [ { homeTeamGoals: number, awayTeamGoals: number } ],
  awayMatches?: [ { homeTeamGoals: number, awayTeamGoals: number } ],
} & Team;

export type ProcessedTeam = {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
};
