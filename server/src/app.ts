import express, { Request, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import acceptLanguage from 'accept-language';
import { AppRouter } from './AppRouter';
import './controllers';

import './services/passport';
import { keys } from './config/config';

import { serveReactAppIfInProduction } from './utils/express/serveReactAppIfInProduction';
import { serveUploadedImages } from './utils/express/serveUploadedImages';

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

app.use(AppRouter.getInstance());

app.use(cookieParser());
acceptLanguage.languages(['en-us', 'pt-br']);
export const detectLocale = (req: Request) => {
  const cookieLocale = req.cookies.locale;

  return (
    acceptLanguage.get(cookieLocale || req.headers['accept-language']) ||
    'pt-br'
  );
};
app.use((req: Request, res: any, next: NextFunction) => {
  const locale = detectLocale(req);
  res.cookie('locale', locale, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  next();
});
serveUploadedImages(app);
serveReactAppIfInProduction(app);
