import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { UserData, userReducer } from './reducers/user'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Categories, categoriesReducer } from './reducers/categories'
import { Donations, donationsReducer } from './reducers/donations'
import Reactotron from '../../ReactotronConfig'
// import { logger } from 'redux-logger'

export interface AppStore {
  user: UserData
  categories: Categories
  donations: Donations
}

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  donations: donationsReducer,
})

// Persistor configuration
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['user'],
  blacklist: ['categories', 'donations'],
}
const persistedReducer = persistReducer(configuration, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Add the action that's causing the error
      },
    }),
  enhancers: getDefaultEnhancers => {
    return getDefaultEnhancers().concat([Reactotron.createEnhancer!()])
  },
})

export const persistor = persistStore(store)
