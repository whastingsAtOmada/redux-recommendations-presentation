/** EXAMPLE: Reducer with redux-starter-kit */
import { createAction, createReducer } from 'redux-starter-kit'

const openModal = createAction('myApp/OPEN_MODAL')
const initialState = { openModal: null }

const myReducer = createReducer(initialState, {
  // Action creators from createAction can be used directly
  [openModal]: (state, action) => {
    // BONUS: Mutative-style immutable updates with Immer.js
    state.openModal = action.payload
  },
  // ...
})

const newState = myReducer(initialState, openModal('contactModal'))
console.log('newState is different: ', newState !== initialState)