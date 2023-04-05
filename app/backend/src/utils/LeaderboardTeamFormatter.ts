import { UnprocessedTeam } from '../types';

export default class LeaderboardFormatter {
  name: string;
  totalPoints: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  totalGames: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;

  constructor(team: UnprocessedTeam) {
    this.name = team.teamName;
    this.totalPoints = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.totalGames = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = 0;
    this.init(team);
  }

  private init(team: UnprocessedTeam): void {
    if (team.homeMatches) {
      this.totalGames += team.homeMatches.length;
      this.homeMatches(team.homeMatches);
    }
    if (team.awayMatches) {
      this.totalGames += team.awayMatches.length;
      this.awayMatches(team.awayMatches);
    }
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.totalPoints = (this.totalVictories * 3) + this.totalDraws;
    this.efficiencyCalc();
  }

  private homeMatches(matches: [{ homeTeamGoals: number, awayTeamGoals: number }]): void {
    matches.forEach(({ homeTeamGoals: home, awayTeamGoals: away }) => {
      this.goalsFavor += home;
      this.goalsOwn += away;
      if (home > away) this.totalVictories += 1;
      if (home < away) this.totalLosses += 1;
      if (home === away) this.totalDraws += 1;
    });
  }

  private awayMatches(matches: [{ homeTeamGoals: number, awayTeamGoals: number }]): void {
    matches.forEach(({ homeTeamGoals: home, awayTeamGoals: away }) => {
      this.goalsFavor += away;
      this.goalsOwn += home;
      if (home < away) this.totalVictories += 1;
      if (home > away) this.totalLosses += 1;
      if (home === away) this.totalDraws += 1;
    });
  }

  private efficiencyCalc(): void {
    this.efficiency = (this.totalPoints / (this.totalGames * 3)) * 100;
  }
}
