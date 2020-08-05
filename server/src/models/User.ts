import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

import { Mongo } from '../database/Mongo';
import { Database } from '../utils/interfaces';

const collection = 'users';

export interface UserState {
  email: string;
  password: string;
  _id: ObjectId;
}

export class User {
  static fromMongoDB() {
    return new User(new Mongo(collection));
  }

  constructor(public database: Database) {}
  createUser = (req: Request, res: Response) => {
    const { email, password } = req.body as UserState;

    if (email === undefined || password === undefined) {
      res
        .status(401)
        .send({ message: 'Email and Password are required fields' });
    } else {
      this.database
        .insertOneEmailAndPassword<UserState>({
          email,
          password,
        })
        .then(() => {
          res.status(201).send({ message: 'User created successfully' });
        })
        .catch((err) => console.log(err));
    }
  };

  logUserIn = async (req: Request, res: Response) => {
    const { email, password } = req.body as UserState;
    const user = await this.database.fetchOneForLogIn<UserState>({
      email,
      password,
    });
    res.status(200).send(user);
  };
}
