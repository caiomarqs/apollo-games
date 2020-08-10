import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

import { requireLogin } from '../middlewares/requireLogin';

export const imageUploadRoutes = express.Router();
const upload = multer(multerConfig);

imageUploadRoutes.post(
  '/api/service/images',
  upload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;
    if (!file) {
      res.status(400).send({ message: 'arquivo é obrigatório' });
    }
    res.status(200).send(file.filename);
  }
);
