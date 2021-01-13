/* global expect*/
'use strict';

const knex = require('knex');
const app = require('../src/app');
const supertest = require('supertest');


describe('convos API:', function() {
  let db;
  let questions = [
    { 'question': 'What do you do?' },
    { 'question': 'Where do you stay?' },
    { 'question': 'With whom do you live?'}
  ];

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.DATABASE_URL,
    });
    app.set('db', db);
  });

  before('cleanup', () => db.raw('TRUNCATE TABLE convos RESTART IDENTITY;'));

  afterEach('cleanup', () => db.raw('TRUNCATE TABLE convos RESTART IDENTITY;'));

  after('disconnect from the database', () => db.destroy());

  describe('GET all questions', () => {

    beforeEach('insert some questions', () => {
      return db('convos').insert(questions);
    });

    //relevant
    it('should respond to GET `/api/convos` with an array of questions and status 200', function() {
      return supertest(app)
        .get('/api/convos')
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.a('array');
          expect(res.body).to.have.length(questions.length);
          res.body.forEach((item) => {
            expect(item).to.be.a('object');
            expect(item).to.include.keys('id', 'question', 'user_id');
          });
        });
    });

  });


  describe('GET questions by id', () => {

    beforeEach('insert some convos', () => {
      return db('convos').insert(convos);
    });

    it('should return correct questions when given an id', () => {
      let doc;
      return db('questions')
        .first()
        .then(_doc => {
          doc = _doc;
          return supertest(app)
            .get(`/api/convos/${doc.id}`)
            .expect(200);
        })
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.include.keys('question');
          expect(res.body.id).to.equal(doc.id);
        });
    });

    it('should respond with a 404 when given an invalid id', () => {
      return supertest(app)
        .get('/api/convos/aaaaaaaaaaaa')
        .expect(404);
    });

  });


  describe('POST (create) new convo', function() {

    //relevant
    it('should create and return a new question when provided valid data', function() {
      const newItem = {
        'id': '1',
        'user_id': '1',
        'question': 'Who\'s your momma?',
        'min_number_of_people': 3
      };

      return supertest(app)
        .post('/api/convos')
        .send(newItem)
        .expect(201)
        .expect(res => {
          expect(res.body).to.be.a('object');
          expect(res.body).to.include.keys('id', 'user_id', 'question', 'min_number_of_people');
          expect(res.body.id).to.equal(newItem.id);
          expect(res.body.user_id).to.equal(newItem.user_id);
          expect(res.header.question).to.equal(`/api/convos/${res.body.id}`);
          expect(res.body.min_number_of_people).to.equal(newItem.min_number_of_people);
        });
    });

    it('should respond with 400 status when given bad data', function() {
      const badItem = {
        foobar: 'broken item'
      };
      return supertest(app)
        .post('/api/convos')
        .send(badItem)
        .expect(400);
    });

  });


  describe('PATCH (update) questions by id', () => {

    beforeEach('insert some questions', () => {
      return db('convos').insert(convos);
    });

    //relevant
    it('should update item when given valid data and an id', function() {
      const item = {
        'user_id': 1,
        'id': 1,
        'is_public': true
      };

      let doc;
      return db('convos')
        .first()
        .then(_doc => {
          doc = _doc;
          return supertest(app)
            .patch(`/api/convos/${doc.id}`)
            .send(item)
            .expect(200);
        })
        .then(res => {
          expect(res.body).to.be.a('object');
          expect(res.body).to.include.keys('user_id', 'id', 'is_public');
          expect(res.body.user_id).to.equal(item.user_id);
          expect(res.body.id).to.equal(item.id);
          expect(res.body.is_public).to.be.true;
        });
    });

    it('should respond with 400 status when given bad data', function() {
      const badItem = {
        foobar: 'broken item'
      };

      return db('convos')
        .first()
        .then(doc => {
          return supertest(app)
            .patch(`/api/convos/${doc.id}`)
            .send(badItem)
            .expect(400);
        });
    });

    it('should respond with a 404 for an invalid id', () => {
      const item = {
        'question': 'What is up?'
      };
      return supertest(app)
        .patch('/api/convos/aaaaaaaaaaaaaaaaaaaaaaaa')
        .send(item)
        .expect(404);
    });

  });


  describe('DELETE a question by id', () => {

    beforeEach('insert some questions', () => {
      return db('questions').insert(questions);
    });

    //relevant
    it('should delete an item by id', () => {
      return db('questions')
        .first()
        .then(doc => {
          return supertest(app)
            .delete(`/api/questions/${doc.id}`)
            .expect(204);
        });
    });

    it('should respond with a 404 for an invalid id', function() {
      return supertest(app)
        .delete('/api/questions/aaaaaaaaaaaaaaaaaaaaaaaa')
        .expect(404);
    });
  });
});