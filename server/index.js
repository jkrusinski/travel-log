var config = require('../config');
var express = require('express');
var mongoose = require('mongoose');

var users = require('./routes/users');
var trips = require('./routes/trips');
var places = require('./routes/places');
var helpers = require('./helpers');

global.Promise = mongoose.Promise = require('bluebird');
global._ = require('lodash');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');

var path = require('path');

// init server and database connection
var app = express();
var db = mongoose.connect(config.database);

// set up view engine to render API key
app.set('view engine', 'ejs');
app.set('views', 'client');

// passport requirements
app.use(expressSession({ secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// basic middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize passport
require('./passport/init')(passport);

// routes
app.get('/', function(req, res, next) { res.render('index', {key: config.googleApiKey }); });
app.use('/api/users', users(passport));
app.use('/api/trips', helpers.isAuth, trips);
app.use('/api/places', helpers.isAuth, places);
app.use(express.static(path.join(__dirname, '../client')));

// error handlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.log(err.message);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: config.env === 'dev' ? err.stack : ''
  });
});

// listen
app.listen(config.port || 3000, function() {
  console.log(`Server listening on port ${config.port || 3000}.`);
});
