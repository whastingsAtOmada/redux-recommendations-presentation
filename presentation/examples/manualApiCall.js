/** EXAMPLE: Manual API request */
import apiRequests from './utils/apiRequests'

export const MY_REQUEST_START = 'MY_REQUEST_START'
export const MY_REQUEST_SUCCESS = 'MY_REQUEST_SUCCESS'
export const MY_REQUEST_ERROR = 'MY_REQUEST_ERROR'

const actions = {
  makeMyRequest() {
    // Return thunk function for redux-thunk to call
    return (dispatch) => {
      dispatch({ type: MY_REQUEST_START })
      return apiRequests.get('/some/url').then(
        (response) => dispatch({
          type: MY_REQUEST_SUCCESS, payload: response.data
        }),
        (error) => dispatch({
          type: MY_REQUEST_ERROR, payload: error.message
        }),
      )
    }
  }
}