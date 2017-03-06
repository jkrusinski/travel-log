var login = require('./login');
var signup = require('./signup');

var User = require('../models/User');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id)

    .then(function(user) {
      done(null, user);
    })

    .catch(function(err) {
      done(err);
    });
  });

  login(passport);
  signup(passport);
};
