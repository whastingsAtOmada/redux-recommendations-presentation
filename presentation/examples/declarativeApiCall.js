/** EXAMPLE: Declarative API call */
import { CALL_API, createApiActions } from './apiCallMiddleware'
import store from './utils/store'

const [ // Utility creates your action types
  MY_REQUEST_START, MY_REQUEST_SUCCESS, MY_REQUEST_FAILURE
] = createApiActions('MY_REQUEST')

const actions = {
  makeMyRequest() {
    // Return plain action
    // Let middleware make request and dispatch actions
    return {
      type: CALL_API, // Type middleware listens for
      payload: {
        actions: [ // Actions for middleware to fire
          MY_REQUEST_START, MY_REQUEST_SUCCESS, MY_REQUEST_FAILURE
        ],
        url: '/some/url',
        method: 'get',
      }
    }
  }
}

// Store set up to console.log actions
store.dispatch(actions.makeMyRequest())