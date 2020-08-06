import express, { Request, Response } from 'express';
import passport from 'passport';

import { User } from '../models/User';

export const authRoutes = express.Router();
const user = User.fromMongoDB();

authRoutes.post('/api/add/user', user.createUser);
authRoutes.post(
  '/api/fetch/user',
  passport.authenticate('local', {
    failureRedirect: '/api/fail',
    failureFlash: true,
  }),

  (req: Request, res: Response) => {
    res.status(200).send(req.user);
  }
);

authRoutes.get('/api/fail', (req: Request, res: Response) => {
  const user = {
    email: '',
    senha: '',
    message: req.flash('error')[0],
  };
  res.status(200).send(user);
});

authRoutes.get('/api/logout', (req: Request, res: Response) => {
  req.logOut();
  res.redirect('/backend');
});
