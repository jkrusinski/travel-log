var express = require('express');
var router = express.Router();

var User = require('./models/User');

router.post('/login', function(req, res, next) {

});

router.post('/signup', function(req, res, next) {
  var newUser = req.body;

  User.findOne({ username: newUser.username })

  .then(function(user) {
    if (user) {
      next(new Error('User already exists!'));
    } else {
      return User.create(newUser);
    }
  })

  .then(function(created) {
    res.json(created);
  })

  .catch(function(err) {
    next(err);
  });
});

module.exports = router;
