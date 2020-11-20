const knex = require('knex');
const app = require('../src/app');
const supertest = require('supertest');


describe('questions API:', function() {
  let db;
  let questions = [
    { 'question': 'What do you do?' },
    { 'question': 'Where do you stay?' },
    { 'question': 'With whom do you live?'}
  ];

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
    app.set('db', db);
  });

  before('cleanup', () => db.raw('TRUNCATE TABLE test-questions RESTART IDENTITY;'));

  afterEach('cleanup', () => db.raw('TRUNCATE TABLE test-questions RESTART IDENTITY;'));

  after('disconnect from the database', () => db.destroy());

  describe('GET all questions', () => {

    beforeEach('insert some questions', () => {
      return db('test-questions').insert(questions);
    });

    //relevant
    it('should respond to GET `/api/questions` with an array of questions and status 200', function() {
      return supertest(app)
        .get('/api/questions')
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.a('array');
          expect(res.body).to.have.length(questions.length);
          res.body.forEach((item) => {
            expect(item).to.be.a('object');
            expect(item).to.include.keys('id', 'title', 'completed');
          });
        });
    });

  });


  describe('GET questions by id', () => {

    beforeEach('insert some questions', () => {
      return db('questions').insert(questions);
    });

    it('should return correct questions when given an id', () => {
      let doc;
      return db('questions')
        .first()
        .then(_doc => {
          doc = _doc;
          return supertest(app)
            .get(`/api/questions/${doc.id}`)
            .expect(200);
        })
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.include.keys('question');
          expect(res.body.id).to.equal(doc.id);
          expect(res.body.title).to.equal(doc.title);
          expect(res.body.completed).to.equal(doc.completed);
        });
    });

    it('should respond with a 404 when given an invalid id', () => {
      return supertest(app)
        .get('/api/questions/aaaaaaaaaaaa')
        .expect(404);
    });

  });


  describe('POST (create) new question', function() {

    //relevant
    it('should create and return a new question when provided valid data', function() {
      const newItem = {
          'question': 'Who\'s your momma?'
      };

      return supertest(app)
        .post('/api/questions')
        .send(newItem)
        .expect(201)
        .expect(res => {
          expect(res.body).to.be.a('object');
          expect(res.body).to.include.keys('id', 'title', 'completed');
          expect(res.body.title).to.equal(newItem.title);
          expect(res.body.completed).to.be.false;
          expect(res.headers.location).to.equal(`/api/questions/${res.body.id}`);
        });
    });

    it('should respond with 400 status when given bad data', function() {
      const badItem = {
        foobar: 'broken item'
      };
      return supertest(app)
        .post('/api/questions')
        .send(badItem)
        .expect(400);
    });

  });


  describe('PATCH (update) questions by id', () => {

    beforeEach('insert some questions', () => {
      return db('questions').insert(questions);
    });

    //relevant
    it('should update item when given valid data and an id', function() {
      const item = {
        'title': 'American questionss'
      };

      let doc;
      return db('questions')
        .first()
        .then(_doc => {
          doc = _doc;
          return supertest(app)
            .patch(`/api/questions/${doc.id}`)
            .send(item)
            .expect(200);
        })
        .then(res => {
          expect(res.body).to.be.a('object');
          expect(res.body).to.include.keys('id', 'title', 'completed');
          expect(res.body.title).to.equal(item.title);
          expect(res.body.completed).to.be.false;
        });
    });

    it('should respond with 400 status when given bad data', function() {
      const badItem = {
        foobar: 'broken item'
      };

      return db('questions')
        .first()
        .then(doc => {
          return supertest(app)
            .patch(`/api/questions/${doc.id}`)
            .send(badItem)
            .expect(400);
        });
    });

    it('should respond with a 404 for an invalid id', () => {
      const item = {
        'title': 'Buy New Dishes'
      };
      return supertest(app)
        .patch('/api/questions/aaaaaaaaaaaaaaaaaaaaaaaa')
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