import * as dotenv from 'dotenv';

interface Key {
  PORT: string;
  COOKIE_KEY: string;
  MONGO_URL: string;
  MONGO_DB_NAME: string;
  APP_DOMAIN: string;
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
  MONGO_URL: process.env.MONGO_URL,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  APP_DOMAIN: process.env.APP_DOMAIN,
} as Key;
