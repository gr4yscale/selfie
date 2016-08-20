import React, {Component} from 'react'
import {
  DeviceEventEmitter,
  Platform,
  AppStateIOS,
  Clipboard,
  Alert,
} from 'react-native'

import { Provider } from 'react-redux'

import store from './redux/store'
import { loadInitialData } from './redux/store'
import App from './containers/app'
import {Actions} from '../node_modules/react-native-router-flux'
import _ from 'lodash' // TOFIX: hrmmmm... not sure about having this one in...
import * as appActions from './redux/actions/appActions'
import ActivityAndroid from '../node_modules/react-native-activity-android'

DeviceEventEmitter.addListener(
  'IntentReceived',
  (data) => {
    console.log('Intent received')
    // store.dispatch(shareActions.androidIntentReceieved(data))
  }
)

class Root extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // if (!__DEV__ && Platform.OS === 'ios') { //eslint-disable-line no-undef
      // CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE })
    // }
    // this.subscribeToAppLifecycleEvents()
  }

  componentWillUnmount() {
    // this.removeAppLifecycleEventListeners()
  }

  // TOFIX: do this on LOAD action of redux-store, this is logic that should be in the actions not component
  loadInitialDataFromReduxStorage() {
    loadInitialData((newState) => {

    })
  }

  // subscribeToAppLifecycleEvents() {
  //   if (Platform.OS === 'ios') {
  //     AppStateIOS.addEventListener('change', (appState) => {
  //       if (appState === 'active') {
  //         this.appDidBecomeActive()
  //       }
  //     })
  //   } else {
  //     // ActivityAndroid.addEventListener('activityResume', () => {
  //       // this.appDidBecomeActive()
  //     // })
  //   }
  // }
//
  // removeAppLifecycleEventListeners() {
    // TOFIX
    // AppStateIOS.removeEventListener('change')
    // ActivityAndroid.removeEventListener('activityResume')
  // }
//
  // appDidBecomeActive() {
    // TOFIX
    // if (!__DEV__ && Platform.OS === 'ios') { //eslint-disable-line no-undef
      // CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE })
    // }
  // }

  refreshData() {
    // TOFIX: refresh data properly
    // store.dispatch(appActions.fetchFriends())
    // .then(() => {
    // })
    // .catch((e) => {
    //   console.log('Error refreshing data:')
    //   console.log(e)
    // })
  }

  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
