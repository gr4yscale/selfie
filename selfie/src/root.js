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
import ActivityAndroid from '../node_modules/react-native-activity-android'
import * as appActions from './redux/actions/appActions'

DeviceInfo = require('react-native-device-info')

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

    this.loadInitialDataFromReduxStorage()

    setTimeout(() => {
      store.dispatch(appActions.registerDevice())
    }, 1000)

    // TOFIX: update the redux store with latest users geo data on an interval for now,
    // in the future, do this on app open

    const updateStoreWithUsersLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Users latest position:')
          console.log(JSON.stringify(position))

          store.dispatch(appActions.usersLocationUpdated(position))
        },
        (error) => {
          console.log('Error getting users position!')
          console.log(error)
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      )
    }

    setInterval(() => {
      updateStoreWithUsersLocation()
    }, 1000 * 60)

    updateStoreWithUsersLocation()
  }

  componentWillUnmount() {
    this.removeAppLifecycleEventListeners()
  }

  // TOFIX: do this on LOAD action of redux-store, this is logic that should be in the actions not component
  loadInitialDataFromReduxStorage() {
    loadInitialData((newState) => {
      let id = DeviceInfo.getUniqueID()
      store.dispatch(appActions.deviceIdentifierDiscovered(id))
    })
  }

  subscribeToAppLifecycleEvents() {
    if (Platform.OS === 'ios') {
      AppStateIOS.addEventListener('change', (appState) => {
        if (appState === 'active') {
          this.appDidBecomeActive()
        }
      })
    } else {
      ActivityAndroid.addEventListener('activityResume', () => {
        this.appDidBecomeActive()
      })
    }
  }

  removeAppLifecycleEventListeners() {
    AppStateIOS.removeEventListener('change')
    ActivityAndroid.removeEventListener('activityResume')
  }

  appDidBecomeActive() {
    // TOFIX
    // if (!__DEV__ && Platform.OS === 'ios') { //eslint-disable-line no-undef
      // CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE })
    // }
  }

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
