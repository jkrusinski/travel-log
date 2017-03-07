var express = require('express');
var router = express.Router();

var User = require('../models/User');

var helpers = require('../helpers');

var sendUserInfo = function(req) {
  var properties = ['username', 'firstName', 'lastName', 'email'];
  return _.pick(req.user, properties);
};

module.exports = function(passport) {

  // allows angularjs to check for valid session
  router.get('/', helpers.isAuth, function(req, res, next) {
    res.json(sendUserInfo(req));
  });

  router.post(
    '/login',
    passport.authenticate('login'),
    function(req, res, next) {
      res.json(sendUserInfo(req));
    }
  );

  router.post(
    '/signup',
    passport.authenticate('signup'),
    function(req, res, next) {
      res.json(sendUserInfo(req));
    }
  );

  router.post('/logout', function(req, res, next) {
    req.logout();
    res.sendStatus(200);
  });

  return router;
};
