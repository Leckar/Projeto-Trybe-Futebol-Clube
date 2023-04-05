import { ProcessedTeam } from '../types';

const descendingOrder = (arr: ProcessedTeam[]): ProcessedTeam[] => arr.sort((t1, t2) => {
  if (t2.totalPoints < t1.totalPoints) return -1;
  if (t2.totalPoints > t1.totalPoints) return 1;
  if (t2.totalVictories < t1.totalVictories) return -1;
  if (t2.totalVictories > t1.totalVictories) return 1;
  if (t2.goalsBalance < t1.goalsBalance) return -1;
  if (t2.goalsBalance > t1.goalsBalance) return 1;
  if (t2.goalsFavor < t1.goalsFavor) return -1;
  if (t2.goalsFavor > t1.goalsFavor) return 1;
  return 0;
});

export default descendingOrder;
