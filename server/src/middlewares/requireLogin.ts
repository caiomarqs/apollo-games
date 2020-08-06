import { Request, Response, NextFunction } from 'express';

export const requireLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === 'test') {
    next();
  } else {
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in' });
    }

    next();
  }
};
