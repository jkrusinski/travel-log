var config = require('../config');
var express = require('express');
var mongoose = require('mongoose');

var app = express();
var db = mongoose.connect(config.database);

app.get('/', function(req, res, next) {
  res.send('The server is running');
});

app.listen(config.port || 3000, function() {
  console.log(`Server listening on port ${config.port || 3000}.`);
});
