import express, { Express } from 'express';
import path from 'path';
import multer from '../../services/multer';
import firebase from '../../services/firebase';

export const serveUploadedImages = (app: Express) => {
  const isInProduction = process.env.NODE_ENV === 'production';
  if (isInProduction) {
  } else {
    app.use(
      '/uploads',
      express.static(path.join(__dirname, '..', '..', '..', 'uploads'))
    );
  }
};
