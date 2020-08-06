import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
import supertest from 'supertest';

import { passDB, getDb, Mongo } from '../../src/database/Mongo';
import { keys } from '../../src/config/config';
import { app } from '../../src/app';
import { TeamState } from '../../src/utils/interfaces';

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

  it('should update one team member and return its updated model', async () => {
    const teamMember = await testdb.insertOne<TeamState>({
      team: 'dev',
      name: 'Pedro Belluomini',
      img: 'Pedro_belluomini.jpg',
      desc: 'Code Lead',
      contacts: {
        git: 'https://github.com/PedroHBell',
        linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
      },
    });

    const newTeamMember = {
      name: 'Lucas Lima',
    };

    const response = await testdb.updateOne<Partial<TeamState>>(
      teamMember._id,
      newTeamMember
    );

    const updatedTeamMember = await testdb.fetchOneById(teamMember._id);

    expect(response.result).toEqual(
      expect.objectContaining({ n: 1, nModified: 1, ok: 1 })
    );

    expect(updatedTeamMember).toEqual(
      expect.objectContaining({ name: 'Lucas Lima' })
    );
  });

  it('should insert one team member and return its model', async () => {
    const teamMember = await testdb.insertOne<TeamState>({
      team: 'dev',
      name: 'Pedro Belluomini',
      img: 'Pedro_belluomini.jpg',
      desc: 'Code Lead',
      contacts: {
        git: 'https://github.com/PedroHBell',
        linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
      },
    });

    expect(teamMember).toEqual(
      expect.objectContaining({
        team: 'dev',
        name: 'Pedro Belluomini',
        desc: 'Code Lead',
        _id: expect.any(ObjectId),
      })
    );
  });

  it('should delete one team member and return the result object with ok = 1', async () => {
    const teamMember = await testdb.insertOne<TeamState>({
      team: 'dev',
      name: 'Pedro Belluomini',
      img: 'Pedro_belluomini.jpg',
      desc: 'Code Lead',
      contacts: {
        git: 'https://github.com/PedroHBell',
        linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
      },
    });

    const result = await testdb.deleteOne(teamMember._id);

    expect(result.result).toEqual(
      expect.objectContaining({
        ok: 1,
        n: 1,
      })
    );
  });

  it('should return all members of one team', async () => {
    await testdb.insertOne<TeamState>({
      team: 'dev',
      name: 'Pedro Belluomini',
      img: 'Pedro_belluomini.jpg',
      desc: 'Code Lead',
      contacts: {
        git: 'https://github.com/PedroHBell',
        linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
      },
    });

    await testdb.insertOne<TeamState>({
      team: 'dev',
      name: 'Antonio Martins',
      img: 'Antonio_Martins.jpg',
      desc: 'Code Lead',
      contacts: {
        git: 'https://github.com/tony2055',
        linkedin:
          'https://www.linkedin.com/in/antonio-henrique-soares-martins-665a61162/',
      },
    });

    await testdb.insertOne<TeamState>({
      team: 'sound',
      name: 'Matheus Boeira',
      img: 'Matheus_Boeira.jpg',
      desc: 'Sound Lead',
      contacts: {
        soundcloud: 'https://soundcloud.com/808bhz-910924459',
        instagram: 'https://www.instagram.com/808bhz/',
      },
    });

    const response = await testdb.findManyByFilter({ team: 'dev' });

    expect(response).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          team: 'dev',
          name: 'Pedro Belluomini',
          _id: expect.any(ObjectId),
        }),
        expect.objectContaining({
          team: 'dev',
          name: 'Antonio Martins',
          _id: expect.any(ObjectId),
        }),
      ])
    );
  });

  it('should add a member successfully returning 201 status and member model', async () => {
    const response = await supertest(app)
      .post('/api/team/add/member')
      .send({
        team: 'dev',
        name: 'Pedro Belluomini',
        img: 'Pedro_belluomini.jpg',
        desc: 'Code Lead',
        contacts: {
          git: 'https://github.com/PedroHBell',
          linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
        },
      });

    const status = await response.status;

    expect(status).toBe(201);
    expect(response.body).toEqual({
      team: 'dev',
      name: 'Pedro Belluomini',
      img: 'Pedro_belluomini.jpg',
      desc: 'Code Lead',
      contacts: {
        git: 'https://github.com/PedroHBell',
        linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
      },
      _id: expect.any(String),
    });
  });

  it('should update a member successfully returning 204 status', async () => {
    const member = await supertest(app)
      .post('/api/team/add/member')
      .send({
        team: 'dev',
        name: 'Pedro Belluomini',
        img: 'Pedro_belluomini.jpg',
        desc: 'Code Lead',
        contacts: {
          git: 'https://github.com/PedroHBell',
          linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
        },
      });
    const { _id } = await member.body;

    const response = await supertest(app)
      .patch(`/api/team/update/member/${_id}`)
      .send({
        name: 'Antonio Martins',
      });

    const status = await response.status;

    expect(status).toBe(204);
  });

  it('should delete a member successfully returning 204 status', async () => {
    const member = await supertest(app)
      .post('/api/team/add/member')
      .send({
        team: 'dev',
        name: 'Pedro Belluomini',
        img: 'Pedro_belluomini.jpg',
        desc: 'Code Lead',
        contacts: {
          git: 'https://github.com/PedroHBell',
          linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
        },
      });
    const { _id } = await member.body;

    const response = await supertest(app)
      .delete(`/api/team/delete/member/${_id}`)
      .send({
        _id,
      });

    const status = await response.status;

    expect(status).toBe(204);
  });

  it('should return all members of one team returning 200 status', async () => {
    await supertest(app)
      .post('/api/team/add/member')
      .send({
        team: 'dev',
        name: 'Pedro Belluomini',
        img: 'Pedro_belluomini.jpg',
        desc: 'Code Lead',
        contacts: {
          git: 'https://github.com/PedroHBell',
          linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
        },
      });

    await supertest(app)
      .post('/api/team/add/member')
      .send({
        team: 'dev',
        name: 'Antonio Martins',
        img: 'Antonio_Martins.jpg',
        desc: 'Code Lead',
        contacts: {
          git: 'https://github.com/tony2055',
          linkedin:
            'https://www.linkedin.com/in/antonio-henrique-soares-martins-665a61162/',
        },
      });

    const response = await supertest(app).get('/api/team/fetch').send({
      team: 'dev',
    });

    const status = await response.status;

    expect(status).toBe(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          team: 'dev',
          name: 'Pedro Belluomini',
          _id: expect.any(String),
        }),
        expect.objectContaining({
          team: 'dev',
          name: 'Antonio Martins',
          _id: expect.any(String),
        }),
      ])
    );
  });
});
