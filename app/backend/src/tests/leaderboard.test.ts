import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import status from '../utils/HttpStatuses';
import {
  getAll,
  getAllAway,
  getAllAwayJson,
  getAllHome,
  getAllHomeJson,
  getAllJson,
} from './mocks/leaderboardMock';
import { ProcessedTeam, UnprocessedTeam } from '../types';
import { service } from '../api/routes/LeaderboardRoute';
import Team from '../database/models/TeamModel';

chai.use(chaiHttp);

const { expect } = chai;
const { ok } = status;

describe('The endpoint "/leaderboard" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return a JSON array as response for a get request', async () => {
    sinon.stub(Team, 'findAll').resolves(getAll as UnprocessedTeam[]);
    const response = await chai.request(app).get('/leaderboard');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq(getAllJson);
  });
});

describe('The endpoint "/leaderboard/away" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return a JSON array as response for a get request', async () => {
    sinon.stub(Team, 'findAll').resolves(getAllAway as UnprocessedTeam[]);
    const response = await chai.request(app).get('/leaderboard/away');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq(getAllAwayJson);
  });
});

describe('The endpoint "/leaderboard/home" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return a JSON array as response for a get request', async () => {
    sinon.stub(Team, 'findAll').resolves(getAllHome as UnprocessedTeam[]);
    const response = await chai.request(app).get('/leaderboard/home');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq(getAllHomeJson);
  });
});