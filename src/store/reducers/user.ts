import { createSlice } from '@reduxjs/toolkit'

export interface UserData {
  userId: string
  firstName: string
  lastName: string
  profileImage: string
}

const initialState: UserData = {
  userId: '1',
  firstName: 'Antonio',
  lastName: 'Radosav',
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
}

export const userSlice = createSlice({
  name: '_user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload
    },
    resetToInitialState: () => {
      return initialState
    },
  },
})

export const userReducer = userSlice.reducer
export const { updateFirstName, resetToInitialState } = userSlice.actions
