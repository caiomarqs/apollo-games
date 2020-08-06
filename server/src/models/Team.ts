import { Request, Response } from 'express';
import { TeamState, Database } from '@utils/interfaces';
import { Mongo } from '@database/Mongo';

export class Team {
  database: Database = new Mongo('teams');

  insertOneTeamMember = async (req: Request, res: Response) => {
    const { team, name, img, desc, contacts } = req.body;
    const serializedTeamMember: TeamState = {
      team,
      name,
      img,
      desc,
      contacts,
    };
    const teamMember = await this.database.insertOne<TeamState>(
      serializedTeamMember
    );

    return teamMember;
  };
}
