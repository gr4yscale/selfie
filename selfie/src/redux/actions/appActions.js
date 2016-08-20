import * as actionTypes from '../actionTypes'
// TOFIX put an Server here
// import Server from '../../parse'

import _ from 'lodash'
import {createAction} from 'redux-actions'

import {
  NativeModules,
  Platform,
} from 'react-native'

const Server = {foo: 'bar'}

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

// UTILITY / JUNK / CRUFT / GET THIS THE FUCK OUT OF HERE:
//////////////////////////////////////////////////////

function configuredServer(state) {
  return { foo: 'bar'}
  // return new Server('userToken');
}
