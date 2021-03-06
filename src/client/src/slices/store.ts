import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from 'src/slices';
import logger from 'redux-logger'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const loggerMiddleware = process.env.NODE_ENV === 'development' ? [logger] : [];
const persistBlacklist = process.env.NODE_ENV === 'development'
  ? []
  : [];
const persistConfig = {
  key: 'root',
  storage,
  blacklist: persistBlacklist,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), ...loggerMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
