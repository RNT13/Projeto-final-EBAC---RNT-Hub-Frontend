import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import authReducer from './slices/authSlice'
import renderSectionSlice from './slices/renderSectionSlice'
import searchSlice from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    renderSection: renderSectionSlice,
    search: searchSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
