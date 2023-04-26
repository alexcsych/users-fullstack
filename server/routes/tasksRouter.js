const { Router } = require('express');
const { tasksController } = require('../controllers');

const tasksRouter = Router();

tasksRouter
  .route('/')
  .post(tasksController.createTask)
  .get(tasksController.getTasks);
module.exports = tasksRouter;
