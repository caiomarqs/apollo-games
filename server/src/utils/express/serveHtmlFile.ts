import { Express, Request, Response } from 'express';
import path from 'path';

export const serveHtmlFile = (app: Express) => {
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(
      path.join(__dirname, '..', '..', '..', '..', 'web', 'build', 'index.html')
    );
  });
};
