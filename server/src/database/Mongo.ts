import { InsertOneWriteOpResult, ObjectId, UpdateWriteOpResult } from 'mongodb';
import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

import { keys } from '../config/config';
import { Database, MyCallback } from '@utils/interfaces';
import console from 'console';

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
      console.log('heressss');
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

interface LoginUser {
  email: string;
  password: string;
  _id: ObjectId;
}

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

  insertOneEmailAndPassword = async (
    insertObject: { email: string; password: string },
    res?: Response,
    token?: string
  ) => {
    const password = await bcrypt.hash(insertObject.password, 12);
    const insertUser = { ...insertObject, password };
    return getDb()
      .db(dbName)
      .collection(this.collection)
      .insertOne(insertUser)
      .then((response: InsertOneWriteOpResult<LoginUser>) => {
        return response.ops[0];
      });
  };

  fetchOneById = (req: Request, res: Response) => {
    const _id = new ObjectId(req.params.id);
    getDb()
      .db(dbName)
      .collection(this.collection)
      .findOne({ _id })
      .then((response: object) => {
        res.send(response);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  fetchOneForLogIn = async (insertObject: {
    email: string;
    password: string;
  }) => {
    const { password, email } = insertObject;

    return await getDb()
      .db(dbName)
      .collection(this.collection)
      .findOne({ email })
      .then(async (response: LoginUser) => {
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
      .catch((err) => {
        return { message: err.message };
      });
  };

  fetchMany = (req: Request, res: Response) => {
    getDb()
      .db(dbName)
      .collection(this.collection)
      .find()
      .toArray()
      .then((array: object[]) => {
        res.send(array);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  updateOne = (req: Request, res: Response) => {
    const _id = new ObjectId(req.params.id);
    const newValue = req.body;
    getDb()
      .db(dbName)
      .collection(this.collection)
      .updateOne({ _id }, { $set: newValue })
      .then((response: UpdateWriteOpResult) => {
        res.send({ message: 'Successfully updated', isUpdated: true });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
        res.send({ message: 'Document not updated', isUpdated: false });
      });
  };

  fetchOneFiltered = (req: Request, res: Response, filter: object) => {
    const _id = new ObjectId(req.params.id);
    const projection = {
      projection: filter,
    };
    getDb()
      .db(dbName)
      .collection(this.collection)
      .findOne({ _id }, projection)
      .then((response: object) => {
        res.send(response);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  fetchManyFiltered = (
    req: Request,
    res: Response,

    filter: object
  ) => {
    const projection = {
      fields: filter,
    };
    getDb()
      .db(dbName)
      .collection(this.collection)
      .find({}, projection)
      .toArray()
      .then((array: object[]) => {
        res.send(array);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  fetchManyByField = (
    req: Request,
    res: Response,

    fieldToSearch: { [key: string]: ObjectId }
  ) => {
    getDb()
      .db(dbName)
      .collection(this.collection)
      .find(fieldToSearch)
      .toArray()
      .then((array: object[]) => {
        res.send(array);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };

  nsertOneWithRefs = (
    insertObject: object,
    res: Response,

    refs: {
      [key: string]: {
        _id: ObjectId;
        collection: string;
        fieldToStoresRefs: string;
      };
    }
  ) => {
    getDb()
      .db(dbName)
      .collection(this.collection)
      .insertOne(insertObject)
      .then((response: InsertOneWriteOpResult<{ _id: ObjectId }>) => {
        const _id = response.insertedId;
        for (var key in refs) {
          const newField = { [refs[key].fieldToStoresRefs]: { _id } };
          getDb()
            .db(dbName)
            .collection(refs[key].collection)
            .updateOne({ _id: refs[key]._id }, { $push: newField });
        }

        res.send(response.ops);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };
}
