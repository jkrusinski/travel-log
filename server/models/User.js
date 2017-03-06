var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bcrypt = require('bcrypt');

var userSchema = new Schema ({

  username: {
    type: String,
    required: true,
    unique: true
  },

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }

});

userSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) {
    next();
  }

  bcrypt.hash(user.password, 10)
  .then(function(hash) {
    user.password = hash;
    next();
  })
  .catch(function(err) {
    next(err);
  });
});

userSchema.methods.comparePassword = function(candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', userSchema);
