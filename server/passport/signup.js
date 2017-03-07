var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

module.exports = function(passport) {

  passport.use('signup', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    // unblock the event loop
    process.nextTick(function() {

      User.findOne({ username: username })

      .then(function(user) {
        if (user) {
          return done(null, false);
        }

        var newUser = _.pick(req.body, ['username', 'password', 'firstName', 'lastName', 'email']);
        return User.create(newUser);
      })

      .then(function(newUser) {
        done(null, newUser);
      })

      .catch(function(err) {
        done(err);
      });
    });
  }));
};
