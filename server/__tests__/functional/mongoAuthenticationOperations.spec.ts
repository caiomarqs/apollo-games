import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';

import { passDB, getDb, Mongo } from '../../src/database/Mongo';
import { keys } from '../../src/config/config';

describe('Mongo Authentication Operations', () => {
  let testdb: Mongo;
  beforeAll(async () => {
    await MongoClient.connect(keys.MONGO_URL, {
      useUnifiedTopology: true,
    }).then((client) => {
      passDB(client);
    });
    testdb = new Mongo('test');
  });

  afterAll(async () => {
    await getDb().close();
  });

  beforeEach(async () => {
    await testdb.deleteMany();
  });

  it('should insert one document with email and password to mongo database', async () => {
    const user = await testdb.insertOneEmailAndPassword({
      email: 'test@example.com',
      password: '123456',
    });

    expect(user).toEqual(
      expect.objectContaining({
        email: 'test@example.com',
        password: expect.any(String),
        _id: expect.any(ObjectId),
      })
    );
  });

  it('should return the users password hashed', async () => {
    const user = await testdb.insertOneEmailAndPassword({
      email: 'test@example.com',
      password: '123456',
    });

    const compareHashedPassword = await bcrypt.compare('123456', user.password);

    expect(compareHashedPassword).toBe(true);
  });

  it('should return the users information when password and email are correct', async () => {
    await testdb.insertOneEmailAndPassword({
      email: 'test@example.com',
      password: '123456',
    });

    const login = await testdb.fetchOneForLogIn({
      email: 'test@example.com',
      password: '123456',
    });

    expect(login).toEqual(
      expect.objectContaining({
        email: 'test@example.com',
        password: expect.any(String),
        _id: expect.any(ObjectId),
      })
    );
  });

  it('should return the message "Incorrect email" for incorrect email', async () => {
    await testdb.insertOneEmailAndPassword({
      email: 'test@example.com',
      password: '123456',
    });

    const login = await testdb.fetchOneForLogIn({
      email: 'wrong@example.com',
      password: '123456',
    });

    expect(login).toEqual(
      expect.objectContaining({
        message: 'Incorrect email',
      })
    );
  });

  it('should return the message "Incorrect password" for incorrect password', async () => {
    await testdb.insertOneEmailAndPassword({
      email: 'test@example.com',
      password: '123456',
    });

    const login = await testdb.fetchOneForLogIn({
      email: 'test@example.com',
      password: '1234567',
    });

    expect(login).toEqual(
      expect.objectContaining({
        message: 'Incorrect password',
      })
    );
  });
});
