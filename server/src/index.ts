import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { keys } from './config/config';
import { serveReactAppIfInProduction } from './utils/express/serveReactAppIfInProduction';

const app = express();
const { PORT, COOKIE_KEY } = keys;

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [COOKIE_KEY],
  })
);
serveReactAppIfInProduction(app);

app.listen(PORT);
