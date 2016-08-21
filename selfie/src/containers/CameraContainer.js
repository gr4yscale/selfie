import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native'

import store from '../redux/store'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Camera from 'react-native-camera'
import {photoTaken, uploadPhoto, updateStatus} from '../redux/actions/appActions'

class CameraContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            captureTarget={Camera.constants.CaptureTarget.disk}
            type="front"
            keepAwake={true}
            style={styles.preview}
        >
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((photo) => {
        console.log('*** Captured photo stored on disk at the following path: ***')
        console.log(photo.path)
        store.dispatch(photoTaken(photo))
      })
      .catch((err) => {
        console.error(err)
      });
  }
}

let styles = StyleSheet.create({
  container: {
    flex:1,
  },
  preview: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})

export default CameraContainer
