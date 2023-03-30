import {
  Model,
  INTEGER,
  BOOLEAN,
} from 'sequelize';

import db from '.';
import Team from './TeamModel';

class Match extends Model {
  id!: number;
  homeTeamId!: number;
  homeTeamGoals!: number;
  awayTeamId!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeamId: {
    type: INTEGER,
    field: 'home_team_id',
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    field: 'home_team_goals',
    allowNull: false,
  },
  awayTeamId: {
    type: INTEGER,
    field: 'away_team_id',
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    field: 'away_team_goals',
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    field: 'in_progress',
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
  underscored: true,
});

Match.belongsTo(Team, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Match.belongsTo(Team, { foreignKey: 'awayTeamId', as: 'awayTeam' });

Team.hasMany(Match, { foreignKey: 'homeTeamId', as: 'homeMatches' });
Team.hasMany(Match, { foreignKey: 'awayTeamId', as: 'awayMatches' });

export default Match;
