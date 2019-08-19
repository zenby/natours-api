const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  // 1 variant
  // const newTour = new Tour({});
  // newTour.save();
  // 2 variant
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

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { tour: newTour }
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Invalid data sent'
    });
  }
};
