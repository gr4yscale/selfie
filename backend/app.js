var bodyParser = require('body-parser');
var bunyanRequest = require('bunyan-request');
var compress = require('compression');
var express = require('express');
var path = require('path');

var error = require('./middlewares/error');
//var index = require('./routes/index');
var api = require('./api');

var log = require('./log');

var app = module.exports = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view cache', false);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(compress());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bunyanRequest({logger: log}));
app.use(require('./middlewares/error'));

app.use('/api/v0', api);

app.use(require('./middlewares/not-found'));

app.use(error);
