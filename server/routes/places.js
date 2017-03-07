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

router.post('/', function(req, res, next) {
  var properties = ['placeId', 'trip', 'name', 'date', 'description'];
  var newPlace = _.pick(req.body, properties);
  newPlace.user = req.user._id;

  Place.create(newPlace)

  .then(function(place) {
    res.json({ id: place._id });
  })

  .catch(function(err) {
    next(err);
  });
});

module.exports = router;
