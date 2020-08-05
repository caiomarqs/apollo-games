import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import flash from 'connect-flash';

import './services/passport';
import { keys } from './config/config';
import { authRoutes } from './routes';
import { serveReactAppIfInProduction } from './utils/express/serveReactAppIfInProduction';

export const app = express();
const { COOKIE_KEY } = keys;

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(authRoutes);

serveReactAppIfInProduction(app);
