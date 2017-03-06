
var config = require('../config');
var express = require('express');
var mongoose = require('mongoose');

var users = require('./routes/users');

global.Promise = mongoose.Promise = require('bluebird');

var morgan = require('morgan');
var bodyParser = require('body-parser');

var path = require('path');

var app = express();
var db = mongoose.connect(config.database);

app.use(morgan('dev'));
app.use(bodyParser.urlEncoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/api/users', users);

app.get('/', function(req, res, next) {
  res.send('The server is running');
});

// handle errors
app.use(function (err, req, res) {
  console.log(err.message);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: config.env === 'dev' ? err : ''
  });
});

app.listen(config.port || 3000, function() {
  console.log(`Server listening on port ${config.port || 3000}.`);
});
