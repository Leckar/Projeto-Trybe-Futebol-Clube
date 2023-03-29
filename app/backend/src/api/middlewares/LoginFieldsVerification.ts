import { NextFunction, Request, Response } from 'express';

import status from '../../utils/HttpStatuses';

const { badRequest } = status;

const verifyLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (email && password) return next();
  res.status(badRequest).json({ message: 'All fields must be filled' });
};

export default verifyLogin;
