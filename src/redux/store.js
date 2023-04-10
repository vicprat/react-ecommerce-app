// import { compose, createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import { rootReducer } from './rootReducer'

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)

// const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares))

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares)
})

// export const persistor = persistStore(store)
