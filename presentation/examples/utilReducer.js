/** EXAMPLE: Reducer with utility */

import createReducer from './createReducer'
const initialState = { /* ... */ }

const myReducer = createReducer({
  // Each action type handled by own, isolated function
  ACTION_TYPE_1: (state, action) => {
    return { ...state, someProp: 'someValue' }
  },
  ACTION_TYPE_2: (state, action) => {
    // ...
  },
  // ...
}, initialState)