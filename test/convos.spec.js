const knex = require('knex');
const app = require('../src/app');
const ConvosService = require('../src/convo/convos-service');
const TriggerPointService = require('../src/convo/convos-service');




describe('Convos Endpoint', function () {
  let db;
  let testConvo = [
    {
      id: 1,
      user_id: '1',
      question: 'question',
      is_favorited: false,
      is_public: true,
      min_number_of_people: 1,
      ok_for_entertainment: true,
      ok_for_exercise: true,
      ok_for_travel: true,
      ok_for_technology: true,
      ok_for_fashion: true,
      ok_for_holidays: true,
      ok_for_education: true,
      ok_for_work: true,
      ok_for_food: true,
      ok_for_leisure: true
    }
  ];

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });

  before('clean the tables before', () => db.raw('TRUNCATE TABLE convos RESTART IDENTITY CASCADE'));
  afterEach('cleanup', () => db.raw('TRUNCATE TABLE convos RESTART IDENTITY CASCADE;'));
  after('disconnect from db', () => db.destroy());

  context(`Given 'convos' has data`, () => {
    before(() => {
      return db
        .into('convos')
        .insert(testConvo);
    });
    it(`gets convos`, () => {
      return ConvosService.getConvos(db, 'question')
        .then(actual => {
          expect(actual).to.eql(
            {
              id: 1,
      user_id: '1',
      question: 'question',
      is_favorited: false,
      is_public: true,
      min_number_of_people: 1,
      ok_for_entertainment: true,
      ok_for_exercise: true,
      ok_for_travel: true,
      ok_for_technology: true,
      ok_for_fashion: true,
      ok_for_holidays: true,
      ok_for_education: true,
      ok_for_work: true,
      ok_for_food: true,
      ok_for_leisure: true
            }
          );
        });
    });
  });
});