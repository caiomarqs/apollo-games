import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { unlinkSync } from 'fs';
import path from 'path';

import multerConfig from '../config/multer';
import { requireLogin } from '../middlewares/requireLogin';

export const imageUploadRoutes = express.Router();
const upload = multer(multerConfig);

imageUploadRoutes.post(
  '/api/service/add/image',
  upload.single('img'),
  (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;
    if (!file) {
      res.status(400).send({ message: 'arquivo é obrigatório' });
    }
    res.status(200).send(file.filename);
  }
);

imageUploadRoutes.delete(
  '/api/service/delete/image/:image_name',
  async (req: Request, res: Response) => {
    const { image_name } = req.params;
    if (!image_name) {
      console.log('No file received');
      const message = 'Error! in image delete.';
      return res.status(500).send({ message });
    } else {
      try {
        unlinkSync(path.join(__dirname, '..', '..', 'uploads', image_name));
        return res.status(200).send('Successfully! Image has been Deleted');
      } catch (e) {
        return res.status(400).send(e);
      }
    }
  }
);
