var express = require('express');
var router = express.Router();

var Trip = require('../models/Trip');

router.get('/', function(req, res, next) {

  Trip.find({ user: req.user._id })

  .then(function(trips) {
    res.json(trips);
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
    res.json({ id: trip._id });
  })

  .catch(function(err) {
    next(err);
  });
});

module.exports = router;
