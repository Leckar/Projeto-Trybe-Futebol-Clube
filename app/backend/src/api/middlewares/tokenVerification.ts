import { NextFunction, Request, Response } from 'express';

import { Payload } from '../../types';
import { validateToken } from '../../auth/JWT';
import status from '../../utils/HttpStatuses';

const { unauthorized } = status;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(unauthorized).json({ message: 'Token not found' });
    const payload = validateToken(authorization as string) as Payload;
    req.body.payload = payload;
    return next();
  } catch (error) {
    return res.status(unauthorized).json({ message: 'Token must be a valid token' });
  }
};

export default verifyToken;
