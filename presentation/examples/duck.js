/** EXAMPLE: Duck pattern */
import createReducer from './createReducer'

// Action types:
const OPEN_MODAL = 'OPEN_MODAL'
// ...

// Action creators:
export const openModal = (modalName) => ({
  type: OPEN_MODAL, payload: modalName
})
// ...

// Reducer:
const yourReducer = createReducer({
  [OPEN_MODAL]: (state, action) => {
    return { ...state, openModal: action.payload }
  },
  // ...
})

export default yourReducer