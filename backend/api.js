const express = require('express');
const DeviceRegisterer = require('./lib/device-registerer');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const api = express();

const deviceRegisterer = DeviceRegisterer();

api.post('/registerDevice', deviceRegisterer.handleRegisterDevice);

api.post('/update', upload.single('selfie'), deviceRegisterer.handleUpdate);

module.exports = api;
