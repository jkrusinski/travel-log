var mongoose = require('mongoose');

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

  trip: {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
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

  description: String,

  photoUrl: String
});

module.exports = mongoose.model('Place', placeSchema);
