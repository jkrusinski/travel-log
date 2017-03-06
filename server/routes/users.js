var express = require('express');
var router = express.Router();

var User = require('../models/User');

module.exports = function(passport) {

  router.post(
    '/login',
    passport.authenticate('login'),
    function(req, res, next) {
      res.sendStatus(200);
    }
  );

  router.post(
    '/signup',
    passport.authenticate('signup'),
    function(req, res, next) {
      res.sendStatus(200);
    }
  );

  return router;
};
