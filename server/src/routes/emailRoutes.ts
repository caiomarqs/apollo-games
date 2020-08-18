import express, { Request, Response, NextFunction } from 'express';

import { keys } from '../config/config';
import { NodeMailer } from '../services/emails/NodeMailer';

export const emailRoutes = express.Router();
const { MAIL_GUN_DOMAIN, MAIL_GUN_KEY } = keys;
emailRoutes.post(
  '/api/service/send/email',
  async (req: Request, res: Response) => {
    const { from, subject, text, name } = req.body;
    const email = new NodeMailer({
      from,
      subject,
      text,
      name,
      api_key: MAIL_GUN_KEY,
      domain: MAIL_GUN_DOMAIN,
    });

    try {
    } catch (e) {
      res.status(500).send({ message: e.message });
    }

    await email.sendEmail();

    res.status(204).send({ message: 'Email successfully sent' });
  }
);
