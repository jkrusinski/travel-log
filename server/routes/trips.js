var express = require('express');
var router = express.Router();

var Trip = require('../models/Trip');

router.get('/', function(req, res, next) {

  Trip.find({ user: req.user._id }).populate('places')

  .then(function(trips) {
    res.json(trips);
  })

  .catch(function(err) {
    next(err);
  });
});

router.get('/:id', function(req, res, next) {

  Trip.findById(req.params.id).populate('places')

  .then(function(trip) {
    res.json(trip);
  })

  .catch(function(err) {
    next(err);
  });
});

router.post('/', function(req, res, next) {
  var newTrip = _.pick(req.body, ['name', 'description', 'places']);
  newTrip.user = req.user._id;

  Trip.create(newTrip)

  .then(function(trip) {
    res.json(trip);
  })

  .catch(function(err) {
    next(err);
  });
});

router.put('/:id', function(req, res, next) {
  var updated = _.pick(req.body, ['name', 'description', 'places']);

  Trip.findByIdAndUpdate(req.params.id, updated)

  .then(function(trip) {
    res.json(trip);
  })

  .catch(function(err) {
    next(err);
  });
});

module.exports = router;
