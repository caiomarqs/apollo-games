import express from 'express';

import { User } from '../models/User';

export const authRoutes = express.Router();
const user = User.fromMongoDB();

authRoutes.post('/api/create/user', user.createUser);
authRoutes.get('/api/fetch/user', user.logUserIn);
