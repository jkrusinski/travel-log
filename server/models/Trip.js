var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tripSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  description: String,

  places: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }]
});

module.exports = mongoose.model('Trip', tripSchema);
