const firebase = require('firebase');
const config = require('../config');

const GeoFire = require('geofire');

module.exports = function() {

  firebase.initializeApp(config.firebase);
  const userLocationsRef = firebase.database().ref('/userLocations');
  const geoFire = new GeoFire(userLocationsRef);
  const usersRef = firebase.database().ref('/users');

  return {

    handleRegisterDevice(req, res, next) {
      const deviceId = req.body.deviceId;
      console.log(req.body);
      usersRef
      .on('value', (users) => {
        let userToken;
        const userRef = usersRef.child(deviceId);

        if (!users.hasChild(deviceId)) {
          userToken = firebase.auth().createCustomToken(deviceId);
          userRef.set({
            token: userToken,
            updatedSelfie: false
          });

          return res.json({
            userToken: userToken
          });
        }

        return userRef
        .on("value", (user) => {
          let userToken;
          userToken = user.child('token').val();

          res.json({
            userToken: userToken
          });

        });

      });

    },

    handleUpdate(req, res, next) {

      console.log(req.body, req.file)
      const deviceId = req.body.deviceId;
      const lat = req.body.lat;
      const lon = req.body.lon;
      const text = req.body.text;

      const pic = req.file;

      const userRef = firebase.database().ref('/users/' + deviceId);

      const photoUpload = firebase.storage().ref('/userSelfies/' + deviceId).put(pic);

      photoUpload.on('state_changed', (photo) => {
        // TODO: handle upload progress

      }, (error) => {
        next(error);
      }, () => {
        userRef.update({
          location: [lat, lon],
          text: text,
          hasSelfie: true,
          picUrl: photoUpload.snapshot.downloadURL
        });

        geoFire.set(deviceId, [lat, lon]);

        res.json({
          status: ok,
          picUrl: photoUpload.snapshot.downloadURL
        })

      });

    },

    handleNearbySearch(req, res, next) {


    }

  }
};
