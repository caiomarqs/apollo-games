import { Request, Response } from 'express';

import { Database } from '../utils/interfaces';
import { Mongo } from '../database/Mongo';
import { controller, post, bodyValidator, use, get } from './decorators';
import { requireLogin } from '../middlewares/requireLogin';
import passport from 'passport';
import { UserState } from './Auth';

const collection = 'users';
const database: Database = new Mongo(collection);

@controller('/api')
class UserController {
  @post('/add/user')
  @bodyValidator('email', 'password')
  @use(requireLogin)
  async createUser(req: Request, res: Response) {
    const { email, password } = req.body as UserState;

    if (email === undefined || password === undefined) {
      res
        .status(401)
        .send({ message: 'Email and Password are required fields' });
    } else {
      await database
        .insertOneEmailAndPassword<UserState>({
          email,
          password,
        })
        .then(() => {
          res.status(201).send({ message: 'User created successfully' });
        })
        .catch((err) => console.log(err));
    }
  }
  @post('/fetch/user')
  @bodyValidator('email', 'password')
  @use(
    passport.authenticate('local', {
      failureRedirect: '/api/fail',
      failureFlash: true,
    })
  )
  logUserIn(req: Request, res: Response) {
    res.status(200).send(req.user);
  }

  @get('/fail')
  userFailLogIn(req: Request, res: Response) {
    const user = {
      email: '',
      senha: '',
      message: req.flash('error')[0],
    };
    res.status(200).send(user);
  }

  @get('/logout')
  logUserOut(req: Request, res: Response) {
    req.logOut();
    res.send(204);
  }
}
