import express, { Request, Response } from 'express';
import passport from 'passport';

import { User } from '../models/User';

export const authRoutes = express.Router();
const user = User.fromMongoDB();

authRoutes.post('/api/add/user', user.createUser);
authRoutes.get(
  '/api/fetch/user',
  passport.authenticate('local', { failureFlash: true }),
  (req: Request, res: Response) => {
    res.status(200).send(req.user);
  }
);
