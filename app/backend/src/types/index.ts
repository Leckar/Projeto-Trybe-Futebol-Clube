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
