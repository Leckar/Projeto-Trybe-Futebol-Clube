import * as jwt from 'jsonwebtoken';

import { Payload } from '../types';

const secret = process.env.JWT_SECRET as string;

const generateToken = (payload: Payload): string => {
  const token = jwt.sign(
    payload,
    secret,
    {
      algorithm: 'HS256',
      expiresIn: '1d',
    },
  );
  return token;
};

const validateToken = (token: string): Payload => {
  const payload = jwt.verify(token, secret);
  return payload as Payload;
};

export {
  generateToken,
  validateToken,
};
