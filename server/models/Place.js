var mongoose = require('mongoose');
var User = require('./User');
var Trip = require('./Trip');

var Schema = mongoose.Schema;

var placeSchema = new Schema({
  placeId: {
    type: String,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  name: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  description: String
});

module.exports = mongoose.model('Place', placeSchema);
