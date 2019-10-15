/** EXAMPLE: Duck-like pattern with redux-starter-kit */
import { createSlice } from 'redux-starter-kit'

// Returns object with .reducer and .actions props
const userSlice = createSlice({
  slice: 'user',
  initialState: { name: '', age: 0 },
  reducers: {
    // Automatically creates action creators from reducer map keys
    setUserAge: (state, action) => {
      state.age = action.payload
    },
    setUserName: (state, action) => {
      state.name = action.payload
    }
  },
})

console.log('userSlice.reducer: ', typeof userSlice.reducer)
console.log('userSlice.actions: ', Object.keys(userSlice.actions))
console.log(
  'userSlice.actions.setUserAge: ', userSlice.actions.setUserAge(40)
)