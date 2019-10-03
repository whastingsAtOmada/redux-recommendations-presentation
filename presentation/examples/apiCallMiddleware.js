/** EXAMPLE: Middle making API calls */
import apiRequests from './utils/apiRequests'

export const CALL_API = 'CALL_API'
export const createApiActions = (requestName) => [
  `${requestName}_START`, `${requestName}_SUCCESS`,
  `${requestName}_FAILURE`,
]

const apiCallMiddleware = store => next => action => {
  if (action.type !== CALL_API) {
    return next(action)
  }
  const { actions, body, method, url } = action.payload
  const [
    startAction, successAction, failureAction
  ] = actions
  next({ type: startAction })
  apiRequests[method](url, body).then(
    (response) => next({
      type: successAction,
      payload: { data: response.data },
    }),
    (error) => next({
      type: failureAction,
      payload: { message: error.message },
    }),
  )
}

export default apiCallMiddleware