import { InsertOneWriteOpResult, MongoError } from 'mongodb';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

import { keys } from '../config/config';
import { Database, MyCallback } from '@utils/interfaces';
import { UserState } from 'models/User';

const url = keys.MONGO_URL;
const dbName = keys.MONGO_DB_NAME;

let db: MongoClient;
export const passDB = (testdb: MongoClient) => {
  db = testdb;
};

export const initDb = (callback: MyCallback<MongoClient>) => {
  if (db) {
    callback(Error('Database is already initialized'), db);
  }

  MongoClient.connect(url, { useUnifiedTopology: true }).then(
    (client: MongoClient) => {
      db = client;
      callback(null, db);
    }
  );
};

export const getDb = () => {
  if (!db) {
    throw Error('Database not initialized');
  }
  return db;
};

export class Mongo implements Database {
  constructor(public collection: string) {}
  deleteMany = () => {
    return getDb()
      .db(dbName)
      .collection(this.collection)
      .deleteMany({})
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  insertOneEmailAndPassword = async <T extends UserState>(insertObject: {
    email: string;
    password: string;
  }) => {
    const password = await bcrypt.hash(insertObject.password, 12);
    const insertUser = { ...insertObject, password };
    return getDb()
      .db(dbName)
      .collection(this.collection)
      .insertOne(insertUser)
      .then((response: InsertOneWriteOpResult<T>) => {
        return response.ops[0];
      });
  };

  fetchOneForLogIn = async <T extends UserState>(insertObject: {
    email: string;
    password: string;
  }) => {
    const { password, email } = insertObject;

    return await getDb()
      .db(dbName)
      .collection(this.collection)
      .findOne({ email })
      .then(async (response: T) => {
        if (!response) {
          return { message: 'Incorrect email' };
        }
        const passwordIsCorrect = await bcrypt.compare(
          password,
          response.password
        );
        if (!passwordIsCorrect) {
          return { message: 'Incorrect password' };
        } else {
          return response;
        }
      })
      .catch((err: MongoError) => {
        return { message: err.message };
      });
  };
}
