import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigation } from './src/navigation/MainNavigation'
import { Provider } from 'react-redux'
import { persistor, store } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'

export const App = (): JSX.Element => {
  if (__DEV__) {
    import('./ReactotronConfig').then(() => null)
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
