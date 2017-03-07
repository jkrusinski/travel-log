var express = require('express');
var router = express.Router();

var Place = require('../models/Place');

router.get('/', function(req, res, next) {

  Place.find({ user: req.user._id })

  .then(function(places) {
    res.json(places);
  })

  .catch(function(err) {
    next(err);
  });
});

router.get('/:id', function(req, res, next) {

  Place.findById(req.params.id)

  .then(function(place) {
    res.json(place);
  })

  .catch(function(err) {
    next(err);
  });
});

router.post('/', function(req, res, next) {
  var properties = ['placeId', 'trip', 'name', 'date', 'description'];
  var newPlace = _.pick(req.body, properties);
  newPlace.user = req.user._id;

  Place.create(newPlace)

  .then(function(place) {
    res.json(place);
  })

  .catch(function(err) {
    next(err);
  });
});

router.put('/:id', function(req, res, next) {
  var properties = ['placeId', 'trip', 'name', 'date', 'description'];
  var updated = _.pick(req.body, properties);

  Place.findByIdAndUpdate(req.params.id, updated)

  .then(function(updated) {
    res.json(updated);
  })

  .catch(function(err) {
    next(err);
  });
});

module.exports = router;
