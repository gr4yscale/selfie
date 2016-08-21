import * as actionTypes from '../actionTypes'
import _ from 'lodash'

const initialState = {
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DEVICE_IDENTIFIER_DISCOVERED:
      return Object.assign({}, state, {
        deviceIdentifier: action.payload,
      })
    case actionTypes.USERS_LOCATION_UPDATED:
      return Object.assign({}, state, {
        usersLocation: action.payload.coords
      })
    case actionTypes.USERS_GET_ALL_REQUEST:
      return Object.assign({}, state, {
        users: [],
      })
    case actionTypes.USERS_GET_ALL_SUCCESS:
      return Object.assign({}, state, {
        users: action.response.results,
      })
    case actionTypes.AUTH_LOGOUT:
      return Object.assign({}, initialState)

    default:
      return state;
  }
}
