module.exports = {
  isAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      var err = new Error('Unauthorized');
      err.status = 401;
      next(err);
    }
  },

  sendUserInfo: function(req) {
    var properties = ['username', 'firstName', 'lastName', 'email'];
    return _.pick(req.user, properties);
  }
};
