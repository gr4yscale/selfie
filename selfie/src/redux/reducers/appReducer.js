import * as actionTypes from '../actionTypes'
import _ from 'lodash'

const initialState = {
}

export default function app(state = initialState, action) {
  switch (action.type) {
    // case actionTypes.LOGIN_SUCCESS:
    //   return Object.assign({}, state, {
    //     ...state,
    //     ...{currentUser: action.response},
    //   })
    // case actionTypes.LINKS_RECEIVED_SUCCESS:
    //   let friends = state.friends
    //   let links = action.response.results.map(
    //     (link) => {
    //       let sender = _.find(friends, {objectId: link.sender_id})
    //       let senderDisplayName = _.get(sender, 'displayName') ? sender.displayName : 'Unknown Sender'
    //       // mutating state here, but I don't care...it seems expensive to alloc new objects for this
    //       return {
    //         ...link,
    //         senderDisplayName,
    //       }
    //     }
    //   )
    //   return Object.assign({}, state, {
    //     links,
    //   })

    case actionTypes.DEVICE_IDENTIFIER_DISCOVERED:
      return Object.assign({}, state, {
        deviceIdentifier: action.payload,
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
