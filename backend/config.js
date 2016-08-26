const env = require('node-env-file');

env('.env');

module.exports = {
  server: {
    port: 8000,
    hostname: '0.0.0.0'
  },
  firebase : {
    apiKey: process.env.Firebase_apiKey,
    authDomain: process.env.Firebase_authDomain,
    databaseURL: process.env.Firebase_databaseURL,
    serviceAccount: "userServiceCredentials.json",
    storageBucket: process.env.Firebase_storageBucket,
  },
  log: {
    level: 'debug',
    src: 'something'
  }
};
