/** EXAMPLE: createReducer utility */

const createReducer = (reducerMap, initialState = {}) => {
  return (state = initialState, action) => {
    const actionHandler = reducerMap[action.type]
    if (actionHandler) {
      return actionHandler(state, action)
    }
    return state
  }
}

export default createReducer