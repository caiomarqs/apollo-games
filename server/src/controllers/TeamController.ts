import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

import { Database, TeamState } from '../utils/interfaces';
import { Mongo } from '../database/Mongo';
import {
  controller,
  post,
  bodyValidator,
  use,
  patch,
  destroy,
  get,
} from './decorators';
import { requireLogin } from '../middlewares/requireLogin';

const collection = 'teams';
const database: Database = new Mongo(collection);

@controller('/api/team')
class TeamController {
  @post('/add/member')
  @use(requireLogin)
  @bodyValidator('team', 'name', 'desc')
  async insertOneTeamMember(req: Request, res: Response) {
    const { team, name, img, desc, contacts } = req.body;
    const serializedTeamMember: TeamState = {
      team,
      name,
      img,
      desc,
      contacts,
    };
    try {
      const teamMember = await database.insertOne<TeamState>(
        serializedTeamMember
      );

      res.status(201).send(teamMember);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  @patch('/update/member/:_id')
  @use(requireLogin)
  async updateOneTeamMember(req: Request, res: Response) {
    const { _id } = req.params;
    const updatedTeamMember = req.body;

    try {
      const response = await database.updateOne<Partial<TeamState>>(
        new ObjectId(_id),
        updatedTeamMember
      );

      res.status(204).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  @destroy('/delete/member/:_id')
  @use(requireLogin)
  async deleteOneTeamMember(req: Request, res: Response) {
    const { _id } = req.params;

    try {
      const response = await database.deleteOne(new ObjectId(_id));

      res.status(204).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  @get('/fetch/:team')
  async fetchAllMembersOfOneTeam(req: Request, res: Response) {
    const { team } = req.params;

    try {
      const response = await database.findManyByFilter<TeamState>({
        team,
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
