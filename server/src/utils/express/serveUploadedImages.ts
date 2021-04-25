import express, { Express } from 'express';
import path from 'path';

export const serveUploadedImages = (app: Express) => {
  app.use(
    '/uploads',
    express.static(path.join(__dirname, '..', '..', '..', 'uploads'))
  );
};
