const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      data: { tour: tours }
    });
  } catch (e) {
    res.status(404).json({
      status: 'failed',
      message: e
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).end();
};

exports.deleteTour = (req, res) => {
  res.status(200).end();
};

exports.getTour = async (req, res) => {
  try {
    // Tour.findOne({ _id: req.params.id });
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: { tour: tour }
    });
  } catch (e) {
    res.status(404).json({
      status: 'failed',
      message: e
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    // 1 variant
    // const newTour = new Tour({});
    // newTour.save();
    // 2 variant
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
