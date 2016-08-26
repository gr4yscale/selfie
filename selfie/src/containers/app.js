import React, {Component} from 'react'
import MainContainer from './MainContainer'
import CameraContainer from './CameraContainer'
import {Router, Scene, ActionConst, Actions} from '../../node_modules/react-native-router-flux'
import store from '../redux/store'

class App extends Component {
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene key="CameraContainer" component={CameraContainer} title="Inbox" type={ActionConst.REPLACE} initial={true} />
          <Scene key="MainContainer" component={MainContainer} title="Inbox" type={ActionConst.REPLACE} />
        </Scene>
      </Router>
    )
  }
}

export default App
