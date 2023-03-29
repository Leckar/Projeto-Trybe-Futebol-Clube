import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/TeamModel';
import teamsJSON, { teamsSqlData, teamById, teamSqlById } from './mocks/teamMock';
import status from '../utils/HttpStatuses'

chai.use(chaiHttp);

const { expect } = chai;
const { ok } = status;

describe('The endpoint "/teams" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return a JSON array as response for a get request', async () => {
    sinon.stub(Team, 'findAll').resolves(teamsSqlData as Team[]);
    const response = await chai.request(app).get('/teams');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq(teamsJSON);
  });it('should return a JSON object as response for a get request using a valid id', async () => {
    sinon.stub(Team, 'findByPk').resolves(teamSqlById as Team);
    const response = await chai.request(app).get('/teams/2');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq(teamById);
  });
});