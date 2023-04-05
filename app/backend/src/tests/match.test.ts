import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/MatchModel';
import status from '../utils/HttpStatuses'

chai.use(chaiHttp);

const { expect } = chai;
const { ok } = status;

describe('The endpoint "/login/roles" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  // it('should return the users role as response for a request with a valid token', async () => {
  //   sinon.stub(Match, 'findAll').resolves(findAllReturn as Match[]);
  //   const response = await chai.request(app).get('/matches').set('Authorization', 'testtoken');
  //   expect(response.status).to.be.eq(ok);
  //   expect(response.body).to.be.deep.eq({ role: 'admin' });
  // });
  // it('should return a unauthorized status as response for a request without a token', async () => {
  //   sinon.stub(Match, 'create').resolves(createReturn as Match);
  //   sinon.stub(JWT, 'validateToken').returns({ username: 'Admin' } as Payload);
  //   const response = await chai.request(app).get('/login/role')
  //     .set('Authorization', 'testtoken').send();
  //   expect(response.status).to.be.eq(unauthorized);
  //   expect(response.body).to.be.deep.eq({ message: 'Token not found' });
  // });
  // it('should return a unauthorized status as response for a login request with an invalid token', async () => {
  //   const response = await chai.request(app).get('/login/role').set('Authorization', 'testtoken');
  //   expect(response.status).to.be.eq(unauthorized);
  //   expect(response.body).to.be.deep.eq({ message: 'Token must be a valid token' });
  // });
});