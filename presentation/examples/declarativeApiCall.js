/** EXAMPLE: Declarative API call */
import { CALL_API, createApiActions } from './apiCallMiddleware'
import store from './utils/store'

const [
  MY_REQUEST_START, MY_REQUEST_SUCCESS, MY_REQUEST_FAILURE
] = createApiActions('MY_REQUEST')

const actions = {
  makeMyRequest() {
    return {
      type: CALL_API,
      payload: {
        actions: [
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