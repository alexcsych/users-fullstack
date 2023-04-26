const _ = require('lodash');
const { Task, User } = require('./../models');

module.exports.getTasks = async (req, res, next) => {
  try {
    const foundTasks = await Task.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: User,
        attributes: ['firstName', 'lastName'],
      },
    });

    res.status(200).send({ data: foundTasks });
  } catch (e) {
    next(e);
  }
};

module.exports.createTask = async (req, res, next) => {
  const { body } = req;
  try {
    const createdTask = await Task.create(body);
    const preparedTask = _.omit(createdTask.get(), ['createdAt', 'updatedAt']);
    res.status(201).send({ data: preparedTask });
  } catch (e) {
    next(e);
  }
};
