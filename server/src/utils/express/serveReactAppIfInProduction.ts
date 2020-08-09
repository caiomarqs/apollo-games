import { Express } from 'express';

import { serveStaticFiles } from './serveStaticFiles';
import { serveHtmlFile } from './serveHtmlFile';

export const serveReactAppIfInProduction = (app: Express): void => {
  const isInProduction = process.env.NODE_ENV === 'production';

  if (isInProduction) {
    serveStaticFiles(app);
    serveHtmlFile(app);
  }
};
