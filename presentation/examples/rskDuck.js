/** EXAMPLE: Duck-like pattern with redux-starter-kit */
import { createSlice } from 'redux-starter-kit'

const userSlice = createSlice({
  slice: 'user',
  initialState: { name: '', age: 0 },
  reducers: {
    // Defines both reducer cases and action creators
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