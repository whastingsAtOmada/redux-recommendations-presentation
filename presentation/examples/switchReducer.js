/** EXAMPLE: Reducer with switch */

const initialState = { /* ... */ }

const myReducer = (state = initialState, action) => {
  let newState = state
  switch(action.type) {
    case 'ACTION_TYPE_1':
      newState = { ...state, someProp: 'someValue' }
      break // <- DON'T FORGET ME
    case 'ACTION_TYPE_2':
      // ...
      break
    // ...
  }
  return newState
}