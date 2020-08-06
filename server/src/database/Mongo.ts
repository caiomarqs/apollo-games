import { InsertOneWriteOpResult, MongoError, ObjectId } from 'mongodb';
import { MongoClient, WithId } from 'mongodb';
import bcrypt from 'bcrypt';

import { keys } from '../config/config';
import { Database, MyCallback } from '../utils/interfaces';
import { UserState } from '../models/User';

const url = keys.MONGO_URL;
const dbName = keys.MONGO_DB_NAME;

let db: MongoClient;
export const passDB = (testdb: MongoClient) => {
  db = testdb;
};

interface HasId {
  _id: string;
}

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
      .findOne({ email });
  };

  fetchOneById = async <T>(_id: ObjectId) => {
    return await getDb()
      .db(dbName)
      .collection(this.collection)
      .findOne({ _id })
      .then((response: T) => {
        return response;
      })
      .catch((err: MongoError) => {
        throw Error(err.message);
      });
  };

  insertOne = async <T>(insertObject: T) => {
    return await getDb()
      .db(dbName)
      .collection(this.collection)
      .insertOne(insertObject)
      .then((response: InsertOneWriteOpResult<WithId<T>>) => {
        return response.ops[0];
      });
  };

  findManyByFilter = async <T>(field: { [key: string]: string }) => {
    return await getDb()
      .db(dbName)
      .collection(this.collection)
      .find<T>(field)
      .toArray();
  };

  deleteOne = async (_id: ObjectId) => {
    return await await getDb()
      .db(dbName)
      .collection(this.collection)
      .deleteOne({ _id });
  };

  updateOne = async <T>(_id: ObjectId, updatedObject: T) => {
    return await getDb()
      .db(dbName)
      .collection(this.collection)
      .updateOne({ _id }, { $set: updatedObject })
      .then((result) => {
        return result;
      });
  };
}
