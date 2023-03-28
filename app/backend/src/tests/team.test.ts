import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Team from '../database/models/TeamModel';
import teamsJSON, { teamsSqlData } from './mocks/teamMock';
import ok from '../utils/HttpStatuses'

chai.use(chaiHttp);

const { expect } = chai;

describe('The endpoint "/teams" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return a JSON array as response for a get request', async () => {
    sinon.stub(Team, 'findAll').resolves(teamsSqlData as Team[]);
    const response = await chai.request(app).get('/teams');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.eq(teamsJSON);
  });
});