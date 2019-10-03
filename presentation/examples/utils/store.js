import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import apiCallMiddleware from '../apiCallMiddleware'

const store = createStore(
  (state = {}, action) => {
    if (!action.type.includes('@@redux')) {
      console.log('ACTION: ', action)
    }
    return state
  },
  applyMiddleware(thunk, apiCallMiddleware)
)

export default store