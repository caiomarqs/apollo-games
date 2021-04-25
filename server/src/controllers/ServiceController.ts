import { Request, Response } from 'express';
import { unlinkSync } from 'fs';
import path from 'path';
import crypto from 'crypto';

import { keys } from '../config/config';
import { NodeMailer } from '../services/emails/NodeMailer';
import upload from '../services/multer';
import { controller, post, bodyValidator, use, destroy } from './decorators';
import { requireLogin } from '../middlewares/requireLogin';
import firebase from '../services/firebase';

const { MAIL_GUN_DOMAIN, MAIL_GUN_KEY } = keys;

@controller('/api/service')
class ServiceController {
  @post('/add/image')
  @use(requireLogin)
  @use(upload.single('img'))
  uploadImage(req: Request, res: Response) {
    const file = req.file;
    if (!file) {
      res.status(400).send({ message: 'arquivo é obrigatório' });
    }
    const hash = crypto.randomBytes(6).toString('hex');

    const fileName = `${hash}-${file.originalname}`;
    const blob = firebase.file(fileName);
    const blobWriter = blob.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    blobWriter.on('error', (err) => {
      console.log(err);
      res.status(500).send({ message: "Error: Couldn't upload file" });
    });

    blobWriter.on('finish', () => {
      res.status(200).send(fileName);
    });

    blobWriter.end(req.file.buffer);
  }

  @destroy('/delete/image/:image_name')
  @use(requireLogin)
  deleteImage(req: Request, res: Response) {
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

  @post('/send/email')
  @bodyValidator('from', 'subject', 'text', 'name')
  async sendEmail(req: Request, res: Response) {
    const { from, subject, text, name } = req.body as Partial<NodeMailer>;
    const email = new NodeMailer({
      from,
      subject,
      text,
      name,
      api_key: MAIL_GUN_KEY,
      domain: MAIL_GUN_DOMAIN,
    });

    await email.sendEmail();

    res.status(200).send({ message: 'Email successfully sent' });

    try {
    } catch (e) {
      res.status(500).send({ message: e.message });
    }
  }
}
