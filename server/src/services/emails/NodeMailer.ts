import nodemailer from 'nodemailer';
import nodemailerMailGun from 'nodemailer-mailgun-transport';

import { renderTemplate } from './views/renderTemplate';
import { keys } from '../../config/config';

export class NodeMailer {
  api_key: string;
  domain: string;
  from: string;
  to: string;
  subject: string;
  name: string;
  text: string;

  constructor(public data: Partial<NodeMailer>) {
    this.api_key = data.api_key ? data.api_key : '';
    this.domain = data.domain ? data.domain : '';
    this.from = data.from ? data.from : '';
    this.subject = data.subject ? data.subject : '';
    this.name = data.name ? data.name : '';
    this.text = data.text ? data.text : '';
    this.to = keys.RECEIVER_EMAIL;
    // console.log(this.to);
  }

  sendEmail = async () => {
    const { api_key, domain, from, to, subject, text, name } = this;
    const auth = {
      service: 'gmail',
      auth: {
        api_key,
        domain,
      },
    };

    const transporter = nodemailer.createTransport(nodemailerMailGun(auth));
    const mailOptions = {
      from,
      to,
      subject,
      html: renderTemplate(text, name),
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        return;
      }
    });
  };
}
