import { createStore, applyMiddleware } from 'redux'
import * as storage from 'redux-storage'
import { decorators } from 'redux-storage'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
import rootReducer from './reducers'
import {AUTH_LOGOUT, USERS_GET_ALL_SUCCESS} from './actionTypes'

// setup persistence middleware
const reducer = storage.reducer(rootReducer)
let engine = createEngine('selfie-save-key')

// TOFIX: make sure persisting friends doesn't bite me in the ass later with cache invalidation issues!
// Ensure we didn't fuck iOS up
let stateKeysToPersist = ['users']

// engine = decorators.filter(engine, stateKeysToPersist)

let actionsAllowedToSave = [AUTH_LOGOUT, USERS_GET_ALL_SUCCESS]
const persistence = storage.createMiddleware(engine, [], actionsAllowedToSave)

const enableLogger = false
let createStoreWithMiddleware
if (__DEV__ && enableLogger) { //eslint-disable-line no-undef
  const logger = createLogger()
  createStoreWithMiddleware = applyMiddleware(thunk, promise, persistence, logger)(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(thunk, promise, persistence)(createStore)
}

const store = createStoreWithMiddleware(reducer)
const load = storage.createLoader(engine)

// load persisted state back into store
export function loadInitialData(callback) {
  load(store)
      .then((newState) => {
        console.log('Store loaded previous state from disk')
        callback(newState)
        return Promise.resolve()
      })
      .catch((err) => console.log('Failed to load previous state from disk', err))
}

export default store;
