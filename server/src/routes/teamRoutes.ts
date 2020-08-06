import express, { Request, Response } from 'express';

import { User } from '../models/User';
import { requireLogin } from '../middlewares/requireLogin';

export const teamRoutes = express.Router();
const user = User.fromMongoDB();

teamRoutes.post('/api/create/user', requireLogin, user.createUser);
