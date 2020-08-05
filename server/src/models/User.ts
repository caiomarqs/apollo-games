import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';

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

  logUserIn = async (email: string, password: string) => {
    const user = await this.database.fetchOneForLogIn<UserState>({
      email,
      password,
    });
    return user;
  };

  verifyPassword = async (password: string, hashedPassword: string) => {
    const passwordIsCorrect = await bcrypt.compare(password, hashedPassword);
    return passwordIsCorrect;
  };

  fetchUserById = async (_id: ObjectId) => {
    const user = await this.database.fetchOneById<UserState>(_id);
    return user;
  };
}
