import express from 'express';

import { requireLogin } from '../middlewares/requireLogin';
import { Team } from '../models/Team';

export const teamRoutes = express.Router();
const team = Team.fromMongoDB();

teamRoutes.post('/api/team/add/member', team.insertOneTeamMember);
teamRoutes.get('/api/team/fetch/:team', team.fetchAllMembersOfOneTeam);
teamRoutes.patch(
  '/api/team/update/member/:_id',
  requireLogin,
  team.updateOneTeamMember
);
teamRoutes.delete(
  '/api/team/delete/member/:_id',
  requireLogin,
  team.deleteOneTeamMember
);
