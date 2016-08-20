const firebase = require('firebase');
const config = require('../config');

module.exports = function() {

  firebase.initializeApp(config.firebase);

  console.log(config.firebase);

  return {

    handleRegisterDevice(req, res, next) {
      const deviceId = req.body.deviceId;
      console.log('deviceid', req.body)
      const usersRef = firebase.database().ref('/users');
      console.log('outside')
      usersRef
      .on('value', (users) => {
        console.log('inside')
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

        userRef
        .on("value", (user) => {
          let userToken;
          userToken = user.child('token').val();

          res.json({
            userToken: userToken
          });

        });

      });

    }

  }
};
