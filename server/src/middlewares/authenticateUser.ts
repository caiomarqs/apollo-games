import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate('local', (err, user, options) => {
    console.log(err);
    console.log(user);
    console.log(options);
    if (err) {
      res.status(500).send(err);
    }
    if (options) {
      res.status(401).send(options);
    }
    if (user) {
      res.status(200).send(user);
    }
  });
};
