import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
  refreshToken: string | null
  user: User | null
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token
      if (action.payload.refreshToken) {
        state.refreshToken = action.payload.refreshToken
      }
      if (action.payload.user) {
        state.user = action.payload.user
      }
    },

    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },

    logout: state => {
      state.token = null
      state.refreshToken = null
      state.user = null

      if (typeof window !== 'undefined') {
        localStorage.removeItem('refreshToken')
      }
    }
  }
})

export const { setCredentials, setUser, logout } = authSlice.actions
export default authSlice.reducer
