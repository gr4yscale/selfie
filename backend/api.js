const express = require('express');
const DeviceRegisterer = require('./lib/device-registerer');

const api = express();
const router = express.Router();

const deviceRegisterer = DeviceRegisterer();

router.post('/registerDevice', deviceRegisterer.handleRegisterDevice);

module.exports = router;
