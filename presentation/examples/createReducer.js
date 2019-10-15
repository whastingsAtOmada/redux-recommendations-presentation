/** EXAMPLE: createReducer utility */

const createReducer = (reducerMap, initialState = {}) => {
  // Returns reducer function
  return (state = initialState, action) => {
    // Looks up handler function based on action type
    const actionHandler = reducerMap[action.type]
    // If there's a handler, run and return result
    if (actionHandler) {
      return actionHandler(state, action)
    }
    // Otherwise, return current state
    return state
  }
}

export default createReducer