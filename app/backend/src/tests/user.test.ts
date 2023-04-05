import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/UserModel';
import status from '../utils/HttpStatuses'
import { findAllReturn,
  invalidEmailJson,
  invalidPwdJson,
  noEmailJson,
  noPwdJson,
  validLoginJson, 
  wrongPwdJson,
} from './mocks/UserMock';
import * as JWT from '../auth/JWT';
import { Payload } from '../types';

chai.use(chaiHttp);

const { expect } = chai;
const { badRequest, ok, unauthorized } = status;

describe('The endpoint "/login" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return a bad request status as response for a login request without the email field', async () => {
    const response = await chai.request(app).post('/login').send(noEmailJson);
    expect(response.status).to.be.eq(badRequest);
    expect(response.body).to.be.deep.eq({ message: 'All fields must be filled' });
  });
  it('should return a bad request status as response for a login request without the password field', async () => {
    const response = await chai.request(app).post('/login').send(noPwdJson);
    expect(response.status).to.be.eq(badRequest);
    expect(response.body).to.be.deep.eq({ message: 'All fields must be filled' });
  });
  it('should return a valid token as response for a login request with correct credentials', async () => {
    sinon.stub(User, 'findAll').resolves(findAllReturn as User[]);
    const response = await chai.request(app).post('/login').send(validLoginJson);
    expect(response.status).to.be.eq(ok);
  });
  it('should return a unauthorized status as response for a login request with an invalid email', async () => {
    const response = await chai.request(app).post('/login').send(invalidEmailJson);
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Invalid email or password' });
  });
  it('should return a unauthorized status as response for a login request with an invalid password', async () => {
    const response = await chai.request(app).post('/login').send(invalidPwdJson);
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Invalid email or password' });
  });
  it('should return a unauthorized status as response for a login request with a wrong password', async () => {
    sinon.stub(User, 'findAll').resolves(findAllReturn as User[]);
    const response = await chai.request(app).post('/login').send(wrongPwdJson);
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Invalid email or password' });
  });
});

describe('The endpoint "/login/roles" must return the correct response with the expected behavior', () => {
  afterEach(sinon.restore);
  it('should return the users role as response for a request with a valid token', async () => {
    sinon.stub(User, 'findAll').resolves(findAllReturn as User[]);
    sinon.stub(JWT, 'validateToken').returns({ username: 'Admin' } as Payload);
    const response = await chai.request(app).get('/login/role').set('Authorization', 'testtoken');
    expect(response.status).to.be.eq(ok);
    expect(response.body).to.be.deep.eq({ role: 'admin' });
  });
  it('should return a unauthorized status as response for a request without a token', async () => {
    const response = await chai.request(app).get('/login/role');
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Token not found' });
  });
  it('should return a unauthorized status as response for a login request with an invalid token', async () => {
    const response = await chai.request(app).get('/login/role').set('Authorization', 'testtoken');
    expect(response.status).to.be.eq(unauthorized);
    expect(response.body).to.be.deep.eq({ message: 'Token must be a valid token' });
  });
});