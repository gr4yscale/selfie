import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native'

import store from '../redux/store'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Camera from 'react-native-camera'
import {photoTaken, uploadPhoto, updateStatus} from '../redux/actions/appActions'
import BlackWhiteTripShader from '../gl/blackWhiteTripShader'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class CameraContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <BlackWhiteTripShader animate={true} width={deviceWidth} height={deviceHeight}/>
        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            captureTarget={Camera.constants.CaptureTarget.disk}
            type="front"
            keepAwake={true}
            style={styles.preview}
        >
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.captureTouch}>
            <View style={styles.capture} />
            <Text style={styles.captureEmoji}>👌</Text>
          </TouchableOpacity>
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
    position: 'absolute',
    left: 10,
    top: 10,
    height: Dimensions.get('window').height - 48,
    width: Dimensions.get('window').width - 20
  },
  capture: {
    position: 'absolute',
    top: 0,
    left : 0,
    width: 80,
    height: 80,
    backgroundColor: '#FFE96B',
    borderRadius: 40,
  },
  captureTouch: {
    position: 'absolute',
    bottom: 24,
    left : (Dimensions.get('window').width / 2) - (80 / 2) - 10,
    width: 80,
    height: 80
  },
  captureEmoji: {
    fontSize: 40,
    textAlign: 'center',
    paddingTop: 10
  }
})

export default CameraContainer
