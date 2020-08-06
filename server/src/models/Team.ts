import { Request, Response } from 'express';
import _ from 'lodash';

import { TeamState, Database } from '../utils/interfaces';
import { Mongo } from '../database/Mongo';
import { ObjectId } from 'mongodb';

export class Team {
  static fromMongoDB() {
    return new Team(new Mongo('teams'));
  }
  constructor(public database: Database) {}

  insertOneTeamMember = async (req: Request, res: Response) => {
    const { team, name, img, desc, contacts } = req.body;
    const serializedTeamMember: TeamState = {
      team,
      name,
      img,
      desc,
      contacts,
    };
    try {
      const teamMember = await this.database.insertOne<TeamState>(
        serializedTeamMember
      );

      res.status(201).send(teamMember);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  updateOneTeamMember = async (req: Request, res: Response) => {
    const { _id } = req.params;
    const updatedTeamMember = req.body;

    try {
      const response = await this.database.updateOne<Partial<TeamState>>(
        new ObjectId(_id),
        updatedTeamMember
      );

      res.status(204).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  deleteOneTeamMember = async (req: Request, res: Response) => {
    const { _id } = req.params;

    try {
      const response = await this.database.deleteOne(new ObjectId(_id));

      res.status(204).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  fetchAllMembersOfOneTeam = async (req: Request, res: Response) => {
    const { team } = req.body;

    try {
      const response = await this.database.findManyByFilter<TeamState>({
        team,
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}
