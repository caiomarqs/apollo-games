import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { keys } from './config/config';
import { authRoutes } from './routes';
import { serveReactAppIfInProduction } from './utils/express/serveReactAppIfInProduction';
import { initDb } from './database/Mongo';
import { MyError } from './utils/interfaces';

const app = express();
const { PORT, COOKIE_KEY } = keys;

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [COOKIE_KEY],
  })
);

app.use(authRoutes);

serveReactAppIfInProduction(app);
initDb((error: MyError) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(PORT);
  }
});
