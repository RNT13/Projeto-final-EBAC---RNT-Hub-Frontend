import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { apiSlice } from './slices/apiSlice'
import authReducer from './slices/authSlice'
import renderSectionSlice from './slices/renderSectionSlice'
import searchSlice from './slices/searchSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  renderSection: renderSectionSlice,
  search: searchSlice,
  [apiSlice.reducerPath]: apiSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // só auth será persistido
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(apiSlice.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
