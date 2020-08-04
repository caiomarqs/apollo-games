import * as dotenv from 'dotenv';

interface Key {
  PORT: string;
  COOKIE_KEY: string;
}

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path: path });

export const keys = {
  PORT: process.env.PORT,
  COOKIE_KEY: process.env.COOKIE_KEY,
} as Key;
