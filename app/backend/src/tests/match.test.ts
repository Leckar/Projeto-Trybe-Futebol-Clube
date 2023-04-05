import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/MatchModel';
import status from '../utils/HttpStatuses';
import { 
  createReturn,
  duplicateTeamJson,
  findAllReturn,
  finishedMatchesJson,
  matchUpdateJson,
  matchesJson,
  newMatchDataJson,
  newMatchJson,
  ongoingMatchesJson,
} from './mocks/matchMock';
import { MatchForTests } from '../types';
import * as JWT from '../auth/JWT';
import { Payload } from '../types';
import { teamsSqlData } from './mocks/teamMock';
import Team from '../database/models/TeamModel';

chai.use(chaiHttp);

const { expect } = chai;
const {
  created,
  ok,
  notFound,
  unauthorized,
  unprocessableEntity,
} = status;

describe('The endpoint "/matches" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return the matches list as response for a get request', async () => {
    sinon.stub(Match, 'findAll').resolves(findAllReturn as MatchForTests[]);
    const response = await chai.request(app).get('/matches');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq(matchesJson);
  });
  it('should return the matches list as response for a get request with the inProgress query set as true', async () => {
    sinon.stub(Match, 'findAll').resolves(findAllReturn as MatchForTests[]);
    const response = await chai.request(app).get('/matches?inProgress=true');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq(ongoingMatchesJson);
  });
  it('should return the matches list as response for a get request with the inProgress query set as false', async () => {
    sinon.stub(Match, 'findAll').resolves(findAllReturn as MatchForTests[]);
    const response = await chai.request(app).get('/matches?inProgress=false');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq(finishedMatchesJson);
  });
  it('should return a new match as response for a sucessful post request', async () => {
    sinon.stub(JWT, 'validateToken').returns({ username: 'Admin' } as Payload);
    sinon.stub(Team, 'findByPk').onFirstCall().resolves(teamsSqlData[0] as Team)
      .onSecondCall().resolves(teamsSqlData[1] as Team);
    sinon.stub(Match, 'create').resolves(createReturn as Match);
    const response = await chai.request(app).post('/matches')
      .set('Authorization', 'testtoken').send(newMatchDataJson);
    expect(response.status).to.be.eq(created);
    expect(response.body).to.be.deep.eq(newMatchJson);
  });
  it('should return an unprocessable entity status as response for a post request with duplicate team ids', async () => {
    sinon.stub(JWT, 'validateToken').returns({ username: 'Admin' } as Payload);
    const response = await chai.request(app).post('/matches')
      .set('Authorization', 'testtoken').send(duplicateTeamJson);
    expect(response.status).to.be.eq(unprocessableEntity);
    expect(response.body).to.be.deep.eq({ message: 'It is not possible to create a match with two equal teams' });
  });
  it('should return a not found status as response for a post request with an invalid team id', async () => {
    sinon.stub(JWT, 'validateToken').returns({ username: 'Admin' } as Payload);
    sinon.stub(Team, 'findByPk').onFirstCall().resolves(teamsSqlData[0] as Team)
    .onSecondCall().resolves(null);
    const response = await chai.request(app).post('/matches')
      .set('Authorization', 'testtoken').send(newMatchDataJson);
    expect(response.status).to.be.eq(notFound);
    expect(response.body).to.be.deep.eq({ message: 'There is no team with such id!' });
  });
  it('should return an unauthorized status as response for a post request without a token', async () => {
    const response = await chai.request(app).post('/matches')
      .send(newMatchDataJson);
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Token not found' });
  });
  it('should return an unauthorized status as response for a post request with an invalid token', async () => {
    const response = await chai.request(app).post('/matches')
      .set('Authorization', 'testtoken').send(newMatchDataJson);
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Token must be a valid token' });
  });
});

describe('The endpoint "/matches/:id" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return an ok status as response for a sucessful patch request', async () => {
    sinon.stub(JWT, 'validateToken').returns({ username: 'Admin' } as Payload);
    sinon.stub(Match, 'update');
    const response = await chai.request(app).patch('/matches/:id')
      .set('Authorization', 'testtoken').send(matchUpdateJson);
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq({ message: 'Finished' });
  });
  it('should return an unauthorized status as response for a patch request without a token', async () => {
    const response = await chai.request(app).patch('/matches/:id')
      .send(matchUpdateJson);
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Token not found' });
  });
  it('should return an unauthorized status as response for a patch request with an invalid token', async () => {
    const response = await chai.request(app).patch('/matches/:id')
      .set('Authorization', 'testtoken').send(matchUpdateJson);
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Token must be a valid token' });
  });
});

describe('The endpoint "/matches/:id/finish" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return an ok status as response for a sucessful patch request', async () => {
    sinon.stub(JWT, 'validateToken').returns({ username: 'Admin' } as Payload);
    sinon.stub(Match, 'update');
    const response = await chai.request(app).patch('/matches/:id/finish')
      .set('Authorization', 'testtoken');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq({ message: 'Finished' });
  });
  it('should return an unauthorized status as response for a patch request without a token', async () => {
    const response = await chai.request(app).patch('/matches/:id/finish');
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Token not found' });
  });
  it('should return an unauthorized status as response for a patch request with an invalid token', async () => {
    const response = await chai.request(app).patch('/matches/:id/finish')
      .set('Authorization', 'testtoken');
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Token must be a valid token' });
  });
});