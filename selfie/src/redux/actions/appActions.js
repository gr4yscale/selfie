import {Actions} from '../../../node_modules/react-native-router-flux'
import * as actionTypes from '../actionTypes'

import _ from 'lodash'
import {createAction} from 'redux-actions'

import {
  NativeModules,
  Platform,
} from 'react-native'

export const getAllUsersRequest = () => ({type: actionTypes.USERS_GET_ALL_REQUEST})
export const getAllUsersSuccess = (json) => ({type: actionTypes.USERS_GET_ALL_SUCCESS, response: json})
export const getAllUsersFailure = (error) => ({type: actionTypes.USERS_GET_ALL_FAILURE, payload: error})

export function getAllUsers() {
  return (dispatch) => {
    dispatch(getAllUsersRequest());
    let api = new Server()
    return api.getAllUsers()
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        response.json()
        .then((json) => {
          return dispatch(getAllUsersSuccess(json))
        })
      } else {
        let json = JSON.parse(response._bodyInit)
        dispatch(getAllUsersFailure(json.error))
        return Promise.reject(json.error)
      }
    })
  }
}

export function photoTaken() {
  return (dispatch) => {
    console.log('Navigating to MainContainer')
    Actions.MainContainer()
    return dispatch(createAction(actionTypes.PHOTO_TAKEN))
  }
}

export function registerDevice() {
  return (dispatch) => {
    dispatch(createAction(actionTypes.REGISTERING_DEVICE))

    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
    }
    requestOptions.body = JSON.stringify({"deviceId": "fakephone1"})

    return fetch('http://192.168.0.10:8000/api/v0/registerDevice', requestOptions)
    .then((response) => {
      console.log('register device response:')
      console.log(response)
      return dispatch(createAction(actionTypes.REGISTERED_DEVICE))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
