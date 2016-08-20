import React, {Component} from 'react'
import MainContainer from './MainContainer'
import CameraContainer from './CameraContainer'
import {Router, Scene, ActionConst, Actions} from '../../node_modules/react-native-router-flux'
import store from '../redux/store'
// import * as shareActions from '../redux/actions/shareActions'

class App extends Component {
  shouldComponentUpdate() {
    console.log('app: shouldComponentUpdate')
    return true
  }

  render() {
    // <Scene key="MainContainer" component={MainContainer} title="Inbox" type={ActionConst.REPLACE} />
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene key="CameraContainer" component={CameraContainer} title="Inbox" type={ActionConst.REPLACE} />
        </Scene>
      </Router>
    )
  }
}

export default App
