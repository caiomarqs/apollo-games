import express, { Express } from 'express';
import path from 'path';

export const serveStaticFiles = (app: Express) => {
  app.use(
    express.static(path.join(__dirname, '..', '..', '..', '..', 'web', 'build'))
  );
};
