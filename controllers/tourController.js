const Tour = require('./../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    return res.status(400).send({
      status: 'error',
      data: { error: 'No data passed' }
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).end();
};

exports.updateTour = (req, res) => {
  res.status(200).end();
};

exports.deleteTour = (req, res) => {
  res.status(200).end();
};

exports.getTour = (req, res) => {
  res.status(200).end();
};

exports.createTour = (req, res) => {
  res.status(200).end();
};
