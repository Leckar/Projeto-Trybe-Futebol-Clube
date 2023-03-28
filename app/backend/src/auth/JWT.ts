import * as jwt from 'jsonwebtoken';

import { Payload } from '../types';

export default class Token {
  private _secret: string;

  constructor() {
    this._secret = process.env.JWT_SECRET as string;
  }

  generate = (payload: Payload): string => {
    const token = jwt.sign(
      payload,
      this._secret,
      {
        algorithm: 'HS256',
        expiresIn: '1d',
      },
    );
    return token;
  };

  validate = (token: string): Payload => {
    const payload = jwt.verify(token, this._secret);
    return payload as Payload;
  };
}
