import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
import supertest from 'supertest';

import { passDB, getDb, Mongo } from '../../src/database/Mongo';
import { keys } from '../../src/config/config';
import { app } from '../../src/';

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

  it('should return the message null for incorrect email', async () => {
    await testdb.insertOneEmailAndPassword({
      email: 'test@example.com',
      password: '123456',
    });

    const login = await testdb.fetchOneForLogIn({
      email: 'wrong@example.com',
      password: '123456',
    });

    expect(login).toBe(null);
  });

  it('should create a user successfully returning 201 status and Message "User created successfully"', async () => {
    const response = await supertest(app)
      .post('/api/create/user')
      .send({ email: 'test@example.com', password: '123456' });

    const status = await response.status;

    expect(status).toBe(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: 'User created successfully',
      })
    );
  });

  it('should log in a user successfully returning 200 status and user model', async () => {
    const response = await supertest(app)
      .get('/api/fetch/user')
      .send({ email: 'test@example.com', password: '123456' });
    const status = await response.status;
    const userModel = await response.body;
    // console.log(response);
    expect(status).toBe(200);
    expect(userModel).toEqual(
      expect.objectContaining({
        email: 'test@example.com',
        password: expect.any(String),
        _id: expect.any(String),
      })
    );
  });

  it('should not log in a user when email are wrong and return 401 status', async () => {
    const response = await supertest(app)
      .get('/api/fetch/user')
      .send({ email: 'est@example.com', password: '123456' });
    const status = await response.status;

    expect(status).toBe(401);
  });

  it('should not log in a user when password are wrong and return 401 status', async () => {
    const response = await supertest(app)
      .get('/api/fetch/user')
      .send({ email: 'test@example.com', password: '1234567' });
    const status = await response.status;

    expect(status).toBe(401);
  });
});
