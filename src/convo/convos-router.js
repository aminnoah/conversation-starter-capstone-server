/* eslint-disable strict */
const path = require('path');
const express = require('express');
const xss = require('xss');
const ConvosService = require('./convos-service');
const { ok } = require('assert');

const convosRouter = express.Router();
const jsonParser = express.json();

//filter out the response to avoid showing broken data
const serializeConvos = convos => ({
  id: convos.id,
    user_id: convos.user_id,
    question: xss(convos.question),
    is_favorited: convos.is_favorited,
    is_public: convos.is_public,
    min_number_of_people: convos.min_number_of_people,
    ok_for_entertainment: convos.ok_for_entertainment,
    ok_for_exercise: convos.ok_for_exercise,
    ok_for_travel: convos.ok_for_travel,
    ok_for_technology: convos.ok_for_technology,
    ok_for_fashion: convos.ok_for_fashion,
    ok_for_holidays: convos.ok_for_holidays,
    ok_for_education: convos.ok_for_education,
    ok_for_work: convos.ok_for_work,
    ok_for_food: convos.ok_for_food,
    ok_for_leisure: convos.ok_for_leisure
});

convosRouter
  .route('/')
//relevant
  .get((req, res, next) => {

    //connect to the service to get the data
    ConvosService.getConvos(req.app.get('db'))
      .then(convoss => {
        //map the results to get each one of the objects and serialize them
        res.json(convos.map(serializeConvos));
      })
      .catch(next);
  })
//relevant
  .post(jsonParser, (req, res, next) => {

    //take the input from the user
    const {
    user_id,
    question,
    is_favorited,
    is_public,
    min_number_of_people,
    ok_for_entertainment,
    ok_for_exercise,
    ok_for_travel,
    ok_for_technology,
    ok_for_fashion,
    ok_for_holidays,
    ok_for_education,
    ok_for_work,
    ok_for_food,
    ok_for_leisure
    } = req.body;
    const newConvos = {
    user_id,
    question,
    is_favorited,
    is_public,
    min_number_of_people,
    ok_for_entertainment,
    ok_for_exercise,
    ok_for_travel,
    ok_for_technology,
    ok_for_fashion,
    ok_for_holidays,
    ok_for_education,
    ok_for_work,
    ok_for_food,
    ok_for_leisure
    };

    //validate the input
    for (const [key, value] of Object.entries(newConvos)) {
      if (value == null) {
        //if there is an error show it
        return res.status(400).json({
          error: {
            message: `Missing '${key}' in request body`
          }
        });
      }
    }

    //save the input in the db
    ConvosService.insertConvos(
      req.app.get('db'),
      newConvos
    )
      .then(convos => {
        console.log(convos)
        res
        //display the 201 status code
          .status(201)
        //redirect the request to the original url adding the convos id for editing
          .location(path.posix.join(req.originalUrl, `/${convos.id}`))
        //return the serialized results
          .json(serializeConvos(convos));
      })
      .catch(next);
  });


convosRouter
  .route('/:convos_id')
  .all((req, res, next) => {
    if (isNaN(parseInt(req.params.convos_id))) {
      //if there is an error show it
      return res.status(404).json({
        error: {
          message: 'Invalid id'
        }
      });
    }

    //connect to the service to get the data
    ConvosService.getConvosById(
      req.app.get('db'),
      req.params.convos_id
    )
      .then(convos => {
        if (!convos) {
          //if there is an error show it
          return res.status(404).json({
            error: {
              message: 'Convos doesn\'t exist'
            }
          });
        }
        res.convos = convos;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {

    //get each one of the objects from the results and serialize them
    res.json(serializeConvos(res.convos));
  })
//relevant
  .patch(jsonParser, (req, res, next) => {

    //take the input from the user
    const {
    user_id,
    question,
    is_favorited,
    is_public,
    min_number_of_people,
    ok_for_entertainment,
    ok_for_exercise,
    ok_for_travel,
    ok_for_technology,
    ok_for_fashion,
    ok_for_holidays,
    ok_for_education,
    ok_for_work,
    ok_for_food,
    ok_for_leisure
    } = req.body;
    const convosToUpdate = {
    user_id,
    question,
    is_favorited,
    is_public,
    min_number_of_people,
    ok_for_entertainment,
    ok_for_exercise,
    ok_for_travel,
    ok_for_technology,
    ok_for_fashion,
    ok_for_holidays,
    ok_for_education,
    ok_for_work,
    ok_for_food,
    ok_for_leisure
    };

    //validate the input by checking the length of the convosToUpdate object to make sure that we have all the values
    const numberOfValues = Object.values(convosToUpdate).filter(Boolean).length;
    if (numberOfValues === 0) {
      //if there is an error show it
      return res.status(400).json({
        error: {
          message: 'Request body must content either \'title\' or \'completed\''
        }
      });
    }

    //save the input in the db
    ConvosService.updateConvos(
      req.app.get('db'),
      req.params.convos_id,
      convosToUpdate
    )
      .then(updatedConvos => {

        //get each one of the objects from the results and serialize them
        res.status(200).json(serializeConvos(updatedConvos));
      })
      .catch(next);
  })
//relevant
  .delete((req, res, next) => {
    ConvosService.deleteConvos(
      req.app.get('db'),
      req.params.convos_id
    )
      .then(numRowsAffected => {

        //check how many rows are effected to figure out if the delete was successful
        res.status(204).json(numRowsAffected).end();
      })
      .catch(next);
  });


module.exports = convosRouter;