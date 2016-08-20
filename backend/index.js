// We are always in NODE_ENV=production
// // Use APP_ENV to set the application environment variable
// process.env.NODE_ENV = 'production';
//
var http = require('http');

var app = require('./app.js');
var config = require('./config.js');
var log = require('./log');
var server = http.createServer(app);

server.listen(process.env.PORT || config.server.port, config.server.hostname);

server.on('listening', function serverStarted() {
  log.info('Server listening on %s:%d', this.address().address, this.address().port);
});

log.info('Server configuration: %j', config);
