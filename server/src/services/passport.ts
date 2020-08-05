import passport from 'passport';
import { Request } from 'express';
import { ObjectId } from 'mongodb';
import { Strategy as LocalStrategy, IVerifyOptions } from 'passport-local';

import { User, UserState } from '../models/User';

const user = User.fromMongoDB();

passport.serializeUser<UserState, ObjectId>(
  (user: UserState, done: (err: any, _id?: ObjectId) => void) => {
    done(undefined, user._id);
  }
);

passport.deserializeUser<UserState, ObjectId>(
  (_id: ObjectId, done: (err: any, user?: UserState) => void) => {
    user.fetchUserById(_id).then((user: UserState) => {
      done(undefined, user);
    });
  }
);

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (
      req: Request,
      email: string,
      password: string,
      done: (err: any, user?: UserState, options?: IVerifyOptions) => void
    ) => {
      await user
        .logUserIn(email, password)
        .then(async (response: UserState) => {
          if (!response) {
            return done(null, undefined);
          }
          const passwordIsCorrect = await user.verifyPassword(
            password,
            response.password
          );

          if (!passwordIsCorrect) {
            return done(null, undefined);
          }
          return done(null, response);
        });
    }
  )
);
