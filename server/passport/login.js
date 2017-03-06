var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

module.exports = function(passport) {

  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {

    User.findOne({ username: username })

    .then(function(user) {
      if (!user) {
        return done(null, false);
      }

      return user.comparePassword(password)

      .then(function(match) {
        if (!match) {
          done(null, false);
        } else {
          done(null, user);
        }
      });
    })

    .catch(function(err) {
      done(err);
    });
  }));
};
